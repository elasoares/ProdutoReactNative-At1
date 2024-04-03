import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  
} from "react-native";


const ExibirProdutosContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const { params } = props.route || {};
  const { nome, descricao, imagens } = params || {};

  const configImage = {
    uri: imagens && imagens.length > 0 ? imagens[0] : null,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={configImage} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}> {descricao}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default ExibirProdutosContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  image: {
    width: "90%",
    height: 270,
    borderRadius: 20,
  },
  detailsContainer: {
    marginHorizontal: 7,
  },
  nome: {
    textAlign:"center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color:"#37474f"
  },

  descricao: {
    textAlign:"center",
    marginBottom: 2,
    fontSize: 15,
    marginVertical: 8,
  },
 
});
