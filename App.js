import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import EditProfile from "./pages/EditProfile";
import CategoryFoods from "./components/CategoryFoods";
import FoodDeatiles from "./pages/FoodDeatiles";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeFoodDetails from "./pages/RecipeFoodDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="edit-profile" component={EditProfile} />
        <Stack.Screen name="CategoryFoods" component={CategoryFoods} />
        <Stack.Screen name="FoodDetails" component={FoodDeatiles} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        <Stack.Screen name="RecipeFoodDetails" component={RecipeFoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
