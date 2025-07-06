import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require("../images/logo-blue.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="mail-outline" size={24} color="black" />
        <TextInput
          placeholder="Enter your phone or email"
          style={styles.input}
          placeholderTextColor="#757575"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={24} color="black" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#757575"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('BottomTab')}>  
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image 
        source={require('../images/g-logo.png')}
        style={styles.googleIcon}
        resizeMode="contain"/>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Ionicons name="logo-apple" size={24} color="black" />
        <Text style={styles.appleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.signUpText}>
        <Text >Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#2750E1', fontSize: 14, fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputBox: {
    width: "83%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox:{
    width: '83%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input:{
    flex: 1,
    marginLeft: 10,
  },
  button:{
    width: '83%',
    height: 50,
    backgroundColor: '#2750E1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword:{
    alignItems: 'flex-end',
    width: '83%',
    marginVertical: 8,
  },
  forgotPasswordText:{
    color: '#2750E1',
    fontSize: 14,
    fontWeight: 'bold',
  },

  googleButton:{
    width: '83%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    gap: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  appleButton: {
    width: '83%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  appleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  appleButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
  signUpText: {
    width: '83%',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },


});
