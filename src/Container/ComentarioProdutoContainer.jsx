import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const ComentarioProdutoContainer = ({ route }) => {
  const { nome, comentarios } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.tituloProduto}>{nome}</Text>

      <View style={styles.especificacoesContainer}>
  {comentarios.map((comentario, index) => (
    <View key={index} style={styles.comentarioContainer}>
      <View style={styles.comentarioHeader}>
      <View style={styles.headerContainer}>  
        <Text style={ styles.comentarioTexto}>
           {comentario.usuario}
        </Text>

        <View style={styles.containerAvaliacao}>
        <Text style={styles.comentarioTexto}> {comentario.nota}</Text>
       
        </View>
      </View>
      <Text style={styles.comentariosData}>{comentario.data}</Text>
      </View>

     
      <Text style={styles.comentarios}>{comentario.comentario}</Text>
    </View>
  ))}
</View>

     


    </ScrollView>
  );
};


export default ComentarioProdutoContainer ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", 
  },
  especificacoesContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff", 
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: "#dee2e6", 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  comentariosData:{
    fontSize: 14,
    color: "#ccc", 
    paddingVertical: 4,
  },
  comentariosTexto: {
    fontSize: 16,
    color: "#495057", 
    paddingVertical: 4,
  },
  tituloProduto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#343a40", 
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  comentarios: {
    fontSize: 16,
    color: "#212529", 
    lineHeight: 24,
    marginTop: 4,
    marginBottom: 50,
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e9ecef", 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  comentarioHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  comentarioTexto: {
    fontWeight: "bold",
    color: "#343a40",
  },
  containerAvaliacao:{
    flexDirection: "row",
    alignItems:"center",
    gap:2
  },
  headerContainer:{
    flexDirection: "row",
    gap: 10,
  }
});
