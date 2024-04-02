import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DuvidasProdutosContainer from '../Container/DuvidasProdutosContainer';
import ComentarioProdutoContainer from '../Container/ComentarioProdutoContainer';
import ExibirProdutosContainer from "../Container/ExibirProdutosContainer";
import MaisInfor from '../Container/MaisInfor';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



import Routes from '../page/Routes';
import Vendedor from '../Container/Vendedor';
import { StyleSheet, View } from 'react-native';
const Tab = createBottomTabNavigator();


const TabsProdutoDetalhe = ({ route }) => {
  const { params } = route;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#f6bd60",
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: "flex",
          position: "absolute",
          elevation: 0,
          backgroundColor:"#fff",
          borderRadius:10,
          height: 50,
          fontSize: 20,
          ...styles.shadow
        }
      })}
    >
      <Tab.Screen name="Informação" children={() => <ExibirProdutosContainer route={route} />} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="information-circle-outline" size={40} color="#6200ee" />
        )
      }}/>
      <Tab.Screen name="Detalhes" children={() => <MaisInfor route={route} />} options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="details" size={35} color="#6200ee" />
        )
      }} />
      <Tab.Screen name="Dúvidas" children={() => <DuvidasProdutosContainer route={route} />} options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign name="questioncircleo" size={30} color="#6200ee" />
        )
      }} />
      <Tab.Screen name="Comentários" children={() => <ComentarioProdutoContainer route={route} />} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome name="commenting-o" size={30} color="#6200ee" />
        )
      }}  />
      <Tab.Screen name="Vendedor" children={() => <Vendedor route={route} />} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="user" size={30} color="#6200ee" />
        )
      }} />
    </Tab.Navigator>
  );
};

export default TabsProdutoDetalhe;

const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#7f5Df0",
    shadowOffset:{
      width: 0,
      height: 10
    },
    shadowOpacity:0.25,
    shadowRadius: 0.5,
    elevation:2
  }
})
