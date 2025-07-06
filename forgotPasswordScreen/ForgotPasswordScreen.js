import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  function handleSendOTP() {
    console.log(email);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require("../images/logo-blue.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.OTPBox}>
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <TextInput placeholder="Enter your email"
           value={email}
           onChangeText={setEmail}
           />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoBox: {
    width: "100%",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    zIndex: 1,
  },
  OTPBox: {
    width: "100%",
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  logo: {
    width: 250,
    height: 100,
  },
  inputBox: {
    width: "83%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  button: {
    width: "83%",
    height: 50,
    backgroundColor: "#2750E1",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
