import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import filter from "lodash.filter";
import Card from "../component/Card";

const url = "https://tp3-rn-default-rtdb.firebaseio.com";
const resource = "produtos";

const converter = (data) => {
  const ids = Object.keys(data);
  const produto = Object.values(data);
  const pegarProduto = produto.map((produto, index) => {
    return { id: ids[index], ...produto };
  });
  return pegarProduto;
};

export default function ListaProdutoContainer({ action }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [pesquisar, setPesquisar] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/${resource}.json`);
      const json = await response.json();
      const produtos = converter(json);
      setData(produtos);
      setFullData(produtos);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const handlePesquisar = () => {
    const formato = pesquisar.toLowerCase();
    const filteredData = filter(fullData, (produto) => {
      return contains(produto, formato);
    });
    setResultadoPesquisa(filteredData);
  };

  const contains = ({ nome, descricao }, text) => {
    if (
      nome.toLowerCase().includes(text) ||
      descricao.toLowerCase().includes(text)
    ) {
      return true;
    }
    return false;
  };

  const handleSort = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortBy === "nome" || sortBy === "descricao") {
        if (a[sortBy] < b[sortBy]) return isAscending ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return isAscending ? 1 : -1;
        return 0;
      } else {
        return 0;
      }
    });
    setData(sortedData);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  const produtoRenderizado = ({ item }) => {
    return <Card produto={item} action={action} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Pesquisar"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.pesquisar}
          value={pesquisar}
          onChangeText={(text) => setPesquisar(text)}
          right={
            <TextInput.Icon
              onPress={handlePesquisar}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              )}
              color="#ccc"
            />
          }
        />
      </View>

      <View style={styles.containertituloProduto}>

      </View>

      <FlatList
        data={resultadoPesquisa.length > 0 ? resultadoPesquisa : data}
        renderItem={produtoRenderizado}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columntamanhoperStyle={styles.columntamanhoper}
        style={styles.containerLista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f7ede2",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 25,
  },
  columntamanhoper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  pesquisar: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  containertituloProduto: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  tituloProduto: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
