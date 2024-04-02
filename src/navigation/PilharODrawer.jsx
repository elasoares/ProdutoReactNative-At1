import { Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PilharODrawer = (props) => (
  <View style={{ flex: 1 }}>
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
          borderColor:"#6200ee",
          borderWidth: 1,
          borderRadius: 50,
          marginBottom:10
        }}
      >
    
        <FontAwesome5 name="skyatlas" size={22} color="#6200ee" style={{ marginTop: 10 }} />
        <Text style={{fontSize: 18, fontWeight:"bold", color:"#6200ee"}}>HeadUP</Text>

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

export default PilharODrawer;
