import { createDrawerNavigator } from "@react-navigation/drawer";
import PilharODrawer from "./PilharODrawer";
import Icon from "react-native-vector-icons/Ionicons";
import { ListaProdutoPage } from "../page/ListaProdutoPage";
import  HeaderButton from '../component/HeaderButton';



const Drawer = createDrawerNavigator();

const DrawerScreens = [
  {
    name: "Home",
    component: ListaProdutoPage,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="home-outline" size={22} color={color} />;
      },
    },
  },
  

];

const DrawerNavigation = (props) => {
  return (
    
    <Drawer.Navigator
      drawerContent={(props) => <PilharODrawer {...props} />}
      screenOptions={{
        drawerIcon: "#f6bd60",
        drawerActiveBackgroundColor: "#6200ee",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
        headerRight: () => (
          <HeaderButton />
        ),
      }}
    >
      {DrawerScreens.map((screens, index) => {
        return <Drawer.Screen key={"screens_" + index} {...screens} />;
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
