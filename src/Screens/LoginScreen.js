import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const LoginScreen = () => {
  const navigation = useNavigation();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Successfully Login!");
        navigation.replace("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Login Error", errorMessage);
      });
  };

  const state = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // alert("Successfully Login!");
        navigation.replace("Home");

        const uid = user.uid;
        // ...
      }
    });
  };

  useEffect(() => {
    state();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View style={styles.imgView}>
          <Image
            style={styles.logoImg}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.txtInput}
            placeholder="Email Address"
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.separator}>
            ________________________________________________________
          </Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
            <Text style={styles.loginTxtBtn}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerTxtBtn}>CREATE NEW ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => navigation.navigate("Forgot", { email: `${email}` })}
          >
            <Text style={styles.forgotTxtBtn}>FORGOTTEN PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    height: 120,
    width: 120,
  },
  imgView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    margin: 5,
    height: 45,
    width: 350,
  },
  separator: {
    color: "lightgrey",
    textAlign: "center",
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 350,
    borderRadius: 15,
    backgroundColor: "#0071F2",
    margin: 10,
  },
  registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 350,
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  forgotBtn: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  loginTxtBtn: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },
  registerTxtBtn: {
    fontSize: 17,
    fontWeight: "700",
  },
  forgotTxtBtn: {
    color: "#0071F2",
    fontSize: 14,
    fontWeight: "700",
  },
});
