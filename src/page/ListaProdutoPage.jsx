import { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../page/Routes.jsx";
import ListaProdutoContainer from "../Container/ListaProdutosContainer.jsx";
import TabsProdutoDetalhe from "../navigation/TabsProdutoDetalhe.jsx";

const Stack = createNativeStackNavigator();

const converter = (data) => {
  const ids = Object.keys(data);
  const produto = Object.values(data);
  const pegarProduto = produto.map((produto, index) => {
    return { id: ids[index], ...produto };
  });
  return pegarProduto;
};

export function ListaProdutoPage({ navigation }) {
  const [produto, setProduto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://tp3-rn-default-rtdb.firebaseio.com";
  const resource = "produtos";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/${resource}.json`);
        if (!response.ok) {
          throw new Error("Erro ao buscar eventos");
        }
        const responseJson = await response.json();
        const convertedList = converter(responseJson);
        setProduto(convertedList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const selecionarNavegador = (produto) => {
    navigation.navigate(Routes.TabsProdutoDetalhe, produto);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={Routes.ListaProdutoContainer}>
            {() => (
              <ListaProdutoContainer
                produto={produto}
                action={selecionarNavegador}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
          options={{
            headerShown: false}}
            name={Routes.TabsProdutoDetalhe}
            component={TabsProdutoDetalhe}
          />
        </Stack.Navigator>
      )}
    </View>
  );
}
