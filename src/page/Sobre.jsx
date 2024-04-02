import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView, ew, StyleSheet, Text, View } from "react-native";

const Sobre =()=>{
 return(
     <ScrollView>
  
  <View style={styles.container}>
        <FontAwesome5 name="skyatlas" size={22} color="#aa18ea" style={{ marginTop: 10 }} />
    <Text style={styles.header}>HeadUP</Text>
    </View>
    <View style={styles.containerSobre}>
        <Text style={styles.titulo}>Sobre nós</Text>
        <Text>A HeadUP é uma empresa inovadora e líder no mercado de headsets, 
oferecendo produtos de áudio de alta qualidade que elevam a experiência auditiva dos seus clientes. 
A HeadUP tem como missão principal proporcionar soluções de áudio que inspirem e
 transformem a maneira como as pessoas se conectam e se comunicam.

Nossa empresa se destaca pela fusão perfeita entre tecnologia de ponta e design elegante, resultando em headsets
 que combinam desempenho excepcional com estilo contemporâneo. Desde fones de ouvido sem fio até headsets para 
 gamers e profissionais, a HeadUP oferece uma ampla variedade de produtos para atender às necessidades de 
 diferentes públicos.
Na HeadUP, a inovação é uma constante. Estamos sempre em busca de novas tecnologias e tendências para aprimorar 
nossos produtos e oferecer o que há de melhor em áudio. Combinando paixão por música, tecnologia de ponta e 
compromisso com a excelência, a HeadUP continua a ser a escolha preferida de entusiastas de áudio e gamers 
exigentes em todo o mundo.</Text>



</View>
    </ScrollView>
    );
}

export default Sobre;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 20
    },
    header:{
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#aa18ea"
    },
    titulo:{
        fontSize: 15, 
        textAlign:"center",
        fontWeight:"bold", 
        marginVertical: 10
    },
    containerSobre:{
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal: 20,
    }
})