import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

const Vendedor = ({ route }) => {
  const { vendedor } = route.params;
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
        <View style={styles.especificacoesContainer}>
          {vendedor.map((vendedorInformacao, index) => (
            <View key={index}>
              <Text style={styles.vendedorInformacaoTexto}> {vendedorInformacao.nome}</Text>
              <Text style={styles.vendedorInformacaoTexto}> {vendedorInformacao.telefone}</Text>
              <Text style={styles.vendedorInformacaoTexto}> {vendedorInformacao.email}</Text>
              <View style={styles.avaliacaoContainer}>
                <Text style={styles.avaliacaoTexto}>Avaliação:</Text> 
                <Text> {vendedorInformacao.avaliacao} </Text> 
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

  
  
export default Vendedor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f7", 
    },
    especificacoesContainer: {
      marginTop: 20,
      marginHorizontal: 10,
      paddingVertical: 20,
      paddingHorizontal: 15,
      backgroundColor: "#ffffff", 
      borderRadius: 10, 
      shadowColor: "#000", 
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1, 
      shadowRadius: 3.84,
      elevation: 5,
    },
    vendedorInformacaoTexto: {
      fontSize: 15,
      color: "#333", 
      lineHeight: 28, 
      paddingVertical: 5, 
    },
    tituloInformacao: {
      fontSize: 20,
      fontWeight: "bold", 
      marginBottom: 10, 
      color: "#444", 
      textAlign: "left", 
    },
    avaliacaoContainer: {
      flexDirection: "row", 
      alignItems: "center", 
      marginTop: 10, 
      gap:5,
    },
    avaliacaoTexto: {
      marginLeft: 5,
      fontSize: 16,
      color: "#37474f",
    },
  });
  