import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screens/LoginScreen";
import ForgotPasswordScreen from "./src/Screens/ForgotPasswordScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import HomeScreen from "./src/Screens/HomeScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options = {styles.options} />
          <Stack.Screen name="Register" component={RegisterScreen} options = {styles.options} />
          <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options = {styles.options} />
          <Stack.Screen name="Home" component={HomeScreen} options = {styles.options} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  options: {
    headerShown: false
  }
});
