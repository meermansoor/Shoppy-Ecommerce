import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { moderateScale } from 'react-native-size-matters';

import { Provider } from "react-redux";
import store from "./store/store";

import SplashScreen from "./SpalshScreen/SplashScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import ForgotPasswordScreen from "./forgotPasswordScreen/ForgotPasswordScreen";
import HomePage from "./HomePage/HomePage";
import CartScreen from "./CartScreen/Cart";
import ProfileScreen from "./TabScreens/profileScreen";
import NotificationScreen from "./TabScreens/notificationScreen";
import CategoryDetailScreen from "./CategoryDetails/CategoryDetailScreen";
import ProductDetailScreen from "./ProductDetails/ProductDetailScreen";
import WishlistScreen from "./Wishlist/WishlistScreen";
import CheckoutScreen from "./CartScreen/CheckoutScreen";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



function BottomTabNavigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
        },
        tabBarActiveTintColor: "#2750E1",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        tabBarLabel="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />

          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        tabBarLabel="Cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: moderateScale(10) }}>
              <Ionicons name="arrow-back" color="white" size={moderateScale(20)} />
            </TouchableOpacity>
          ),
          headerShown: true,
          headerTitle: "Cart",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2750E1",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        tabBarLabel="Notification"
        tabBarStyle={{ display: 'none' }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
          headerTitleAlign:'center',
          headerShown: true,
          headerTitle: "Notification",
          headerStyle: {
            backgroundColor: "#2750E1",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        tabBarLabel="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          headerTitleAlign:'center',
          headerShown: false,
          headerTitle: "Profile",
          headerStyle: {
            backgroundColor: "#2750E1",
          },
          headerTitleStyle: {
            color: "white",
          },
          
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} 
        options={
          {
            headerShown: false,
          }
        }/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="categoryDetailsScreen" component={CategoryDetailScreen} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
        <Stack.Screen 
          name="CheckoutScreen" 
          component={CheckoutScreen}
          options={{
            headerShown: true,
            headerTitle: "Checkout",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#2750E1",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
