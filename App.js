import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Nottification from "./pages/Nottification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="notification" component={Nottification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
