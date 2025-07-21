import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import  Ionicons  from '@expo/vector-icons/Ionicons';

import { createUser } from "../utils/auth";
function SignUpScreen({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
      try{
        setIsLoading(true);
        const response = await createUser(email, password);
        if(response.idToken){
          navigation.navigate('Login');
        }else{
          Alert.alert('Error', response.message);
        }
      }catch(error){
        Alert.alert('Error', error.message);
      }finally{
        setIsLoading(false);
      }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={require('../images/logo-blue.png')} style={styles.logo}/>
            </View>

            <View style={styles.inputBox}>
                <Ionicons name= "mail-outline" size={24} color="black" />
                <TextInput
                    placeholder="Enter your phone or email"
                    style={styles.input}
                    placeholderTextColor="#757575"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputBox}>
                <Ionicons name= "lock-closed-outline" size={24} color="black" />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    placeholderTextColor="#757575"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    keyboardType="default"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputBox}>
                <Ionicons name= "lock-closed-outline" size={24} color="black" />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    placeholderTextColor="#757575"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showPassword}
                    keyboardType="default"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={[styles.button, isLoading && styles.buttonDisabled]} 
                onPress={handleSignUp}
                disabled={isLoading}
            >
                <Text style={styles.buttonText}>{isLoading ? 'Signing up...' : 'Sign Up'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <Image 
                    source={require('../images/g-logo.png')}
                    style={styles.googleIcon}
                    resizeMode="contain"/>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <Ionicons name="logo-apple" size={24} color="black" />
                <Text style={styles.facebookButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <View style={styles.signUpText}>
                <Text style={styles.signUpText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
    },
    logoBox:{
        marginTop: 100,
        alignItems: 'center',
    },
    logo:{
        width: 239,
        height: 66,
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
        height: 55,
        backgroundColor: '#2750E1',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton:{
        width: '83%',
        height: 55,
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
    facebookButton: {
        width: '83%',
        height: 55,
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
    facebookButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal',
    },
    signUpText: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    loginText: {
        paddingTop: 10,
        color: '#2750E1',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
