import {
  ScrollView,
  Text,
  View,
  StyleSheet,

  
} from "react-native";


const DuvidasProdutosContainer = ({ route }) => {
  const { nome, duvidas } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.tituloProduto}>{nome}</Text>

      <View style={styles.especificacoesContainer}>
        {duvidas.map((duvidas, index) => (
          <View key={index} >
          <Text style={styles.duvidasTexto}> {duvidas.usuario}</Text>
            <Text style={styles.duvidasData}> {duvidas.data}</Text>
            <Text style={styles.duvidas}> {duvidas.pergunta}</Text>

           <Text style={styles.resposta}> {duvidas.resposta}</Text>
      
           
          </View>

        ))}
         
      </View>

     


    </ScrollView>
  );
};


export default DuvidasProdutosContainer;

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
  duvidasData:{
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
  duvidas: {
    fontSize: 16,
    color: "#212529", 
    lineHeight: 24,
    marginTop: 4,
    marginBottom: 10,
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
  resposta: {
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
  duvidasTexto: {
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
