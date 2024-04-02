import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/navigation/DrawerNavigation";


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
