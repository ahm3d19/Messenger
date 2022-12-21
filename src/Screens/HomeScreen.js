import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
        alert("Sign-out successful");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.citypng.com/public/uploads/preview/free-login-logout-black-icon-png-11641484336leezglmsx8.png",
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 60,
    width: 60,
  },
});
