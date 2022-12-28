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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigation.replace("Login");
        Alert.alert("Successfully Account Created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("SignUp Error", errorMessage);
        // ..
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [phoneNo, setPhoneNo] = useState("")
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
            placeholder="Full Name"
            autoCorrect={false}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.separator}>
            ________________________________________________________
          </Text>
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
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.regBtn} onPress={() => register()}>
            <Text style={styles.regTxtBtn}>CREATE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
  regBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 350,
    borderRadius: 15,
    backgroundColor: "#0071F2",
    margin: 10,
  },
  regTxtBtn: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
