import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";


const notifications = {
  orders: [
    {
      id: 1,
      title: "Order #1234 Confirmed",
      message: "Your order has been confirmed and will be delivered soon."
    },
    {
      id: 2, 
      title: "Order #1235 Delivered",
      message: "Your order has been delivered successfully."
    },
    {
      id: 3,
      title: "Order #1236 Shipped",
      message: "Your order is on the way! Track your shipment."
    }
  ],
  offers: [
    {
      id: 1,
      title: "Special Weekend Sale!",
      message: "Get 30% off on all electronics this weekend."
    },
    {
      id: 2,
      title: "Flash Sale Alert",
      message: "24 hour flash sale starting now! Don't miss out."
    },
    {
      id: 3,
      title: "Clearance Sale",
      message: "Up to 50% off on selected items. Limited time only!"
    }
  ],
  promos: [
    {
      id: 1,
      title: "First Purchase Promo",
      message: "Use code FIRST10 to get 10% off on your first purchase"
    },
    {
      id: 2,
      title: "Free Shipping",
      message: "Free shipping on orders above $50"
    },
    {
      id: 3,
      title: "Loyalty Rewards",
      message: "Earn 2x points on all purchases this month"
    }
  ]
};



export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState("orders");

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top buttons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setActiveTab("orders")}>
          <View style={styles.headerIcon}>
            <Entypo name="megaphone" size={29} color="white" />
          </View>
          <Text style={styles.headerText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("offers")}>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons name="brightness-percent" color="white" size={29} />
          </View>
          <Text style={styles.headerText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("promos")}>
          <View style={styles.headerIcon}>
            <Ionicons name="notifications" size={29} color="white" />
          </View>
          <Text style={styles.headerText}>Promos</Text>
        </TouchableOpacity>
      </View>


      {/* List rendering */}
      <FlatList
        data={notifications[activeTab]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 30,
    },
    headerIcon: {
      width: 55,
      height: 55,
      backgroundColor: "#2750E1",
      padding: 10,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      color: "#2750E1",
      fontSize: 13,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 5,
    },
    card: {
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontWeight: "bold",
      fontSize: 16,
    },
    message: {
      color: "#555",
      marginTop: 4,
    },
  });
  
