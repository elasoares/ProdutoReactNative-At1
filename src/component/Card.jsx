import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Card = ({ produto, action }) => {
  const [dimensional, setDimensional] = useState("portrait");
  const { nome, preco, imagens } = produto;
  const imgConfig = { uri: imagens && imagens.length > 0 ? imagens[0] : null };

  const atualizandoDimensao = () => {
    const { width, height } = Dimensions.get("window");
    setDimensional(width > height ? "landscape" : "portrait");
  };

  useEffect(() => {
    atualizandoDimensao();
    Dimensions.addEventListener("change", atualizandoDimensao);

  }, []);

  const valorParcelado = (preco / 10).toFixed(2);

  return (
    <TouchableOpacity
      onPress={() => action(produto)}
      style={[
        styles.container,
        dimensional === "landscape" && styles.containerHorizontal,
      ]}
    >
      <View
        style={[
          styles.imageContainer,
          dimensional === "landscape" && styles.imageContainerHorizontal,
        ]}
      >
        <Image
          style={[
            styles.cardImage,
            dimensional === "landscape" && styles.cardImageHorizontal,
          ]}
          source={imgConfig}
        />
      </View>

      <View
        style={[
          styles.cardInfo,
          dimensional === "landscape" && styles.cardInfoHorizontal,
        ]}
      >
        <Text style={styles.produto}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
        <View style={styles.infoDovalor}>
          <Text>R$ {preco.toFixed(2)} à vista</Text>
          <Text>ou 10x de R$ {valorParcelado}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    margin: 3,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  containerHorizontal: {
    flexDirection: "row",
    height: 200,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerHorizontal: {
    width: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  cardImageHorizontal: {
    width: "80%",
    height: 198,
    borderRadius: 5,
  },
  cardInfo: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  cardInfoHorizontal: {
    maxWidth: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  produto: {
    color: "#124559",
    fontSize: 17,
    marginBottom: 5,
  },
  infoDovalor: {
    gap: 2,
    color: "#124559",
    fontSize: 15,
    marginTop: 5,
  },
  preco: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#37474f",
  },
  
});

export default Card;
