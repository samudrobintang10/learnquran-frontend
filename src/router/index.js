import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
