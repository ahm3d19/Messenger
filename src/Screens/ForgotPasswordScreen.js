import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const ForgotPasswordScreen = (props) => {
  const passEmail = props.route.params.email;
  const [email, setEmail] = useState("");

  // const email = props.route.params.email;

  const resetPass = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          Alert.alert("Password Email Sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
          // ..
        });
    } else {
      Alert.alert("Enter Valid Email!");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View style={styles.titleView}>
          <Text style={styles.forgottenTxtLbl}>Forgotten Password</Text>
          <Text style={styles.txtDesc}>
            Enter your registered email address.
          </Text>
          <TextInput
            style={styles.txtInput}
            placeholder="Email Address"
            autoCorrect={false}
            autoCapitalize={false}
            onChangeText={(text) => setEmail(text)}

            // onChangeText={(text) => setEmail(text)}
            // value={email}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.sendBtn} onPress={() => resetPass()}>
            <Text style={styles.txtBtn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    flex: 2,
    alignItems: "center",
    paddingTop: 40,
  },
  forgottenTxtLbl: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  txtDesc: {
    fontSize: 14,
    color: "grey",
    marginBottom: 20,
  },
  txtInput: {
    margin: 5,
    height: 45,
    width: 350,
  },
  btnView: {
    justifyContent: "flex-end",
  },
  sendBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 350,
    borderRadius: 15,
    backgroundColor: "#0071F2",
    margin: 10,
  },
  txtBtn: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
