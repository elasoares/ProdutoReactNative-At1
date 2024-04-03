import { useEffect, useState } from "react";
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    
  } from "react-native";

  
  const MaisInfor = ({ route }) => {
    const { nome, preco, especificacaotecnicas } = route.params;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
            <Text style={styles.tituloProduto}>{nome}</Text>
            <View style={styles.especificacoesContainer}>
              {especificacaotecnicas.map((especificacao, index) => (
                <View key={index}>
                  <Text style={styles.especificacaoTexto}>
                    {especificacao.conectividade}
                  </Text>
                  <Text style={styles.especificacaoTexto}>
                    {especificacao.microfone}
                  </Text>
                  <Text style={styles.especificacaoTexto}>
                    {especificacao.design}
                  </Text>
                  <Text style={styles.especificacaoTexto}>
                    {especificacao.bateria}
                  </Text>
                  <Text style={styles.especificacaoTexto}>
                    {especificacao.compatibilidade}
                  </Text>
                </View>
              ))}
              <View style={styles.compraEvalor}>
                <Text style={styles.preco}>{preco.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    );
  };
  
  
export default MaisInfor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fafafa", 
    },
    especificacoesContainer: {
      marginTop: 20,
      marginHorizontal: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "#ffffff", 
      borderRadius: 8, 
      borderWidth: 1,
      borderColor: "#e0e0e0", 
 
    },
    especificacaoTexto: {
      fontSize: 16,
      color: "#424242", 
      lineHeight: 24, 
      paddingVertical: 10,
    },
    tituloProduto: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#37474f", 
      textAlign: "center",
      marginTop: 20,
      marginBottom: 10,
    },
    compraEvalor: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 120,
        gap: 20,
      },
      botaoDeCompraContainer: {
        width: 150,
        padding: 10,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#37474f",
        borderColor: "#eff6e0",
        alignSelf: "center",
      },
      botaoDeCompra: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#eff6e0",
      },
      preco: {
        color: "#37474f",
        fontSize: 18,
        fontWeight: "bold",
      },
  });
  
  