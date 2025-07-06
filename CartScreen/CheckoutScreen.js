import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import products from "../data/productData";
import AddressTile from "../components/AddressTile";

export default function CheckoutScreen() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Payment</Text>
      <View style={styles.paymentCard}>
        <View style={styles.paymentOptions}>
          <Image
            source={require("../images/payment/unionpay.png")}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>Credit/Debit Card</Text>
        </View>
        <View style={styles.paymentOptions}>
          <Image
            source={require("../images/payment/paypal-logo.png")}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>Paypal</Text>
        </View>
        <View style={styles.paymentOptions}>
          <Image
            source={require("../images/payment/apple-pay.png")}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>Apple Pay</Text>
        </View>
        <View style={styles.paymentOptions}>
          <Image
            source={require("../images/payment/more-options.png")}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>Other Payment Methods</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="gray"
          keyboardType="default"
        />
      </View>
      <View style={styles.addressContainer}>
        <AddressTile address="123 Main St, Anytown, USA" onEdit={() => {}} onDelete={() => {}} />
      </View>
      <TouchableOpacity style={styles.checkoutButton}>  
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",

    marginHorizontal: 15,
  },
  paymentContainer: {
    flex: 1,
    padding: 20,
  },
  paymentCard: {
    justifyContent: "space-between",
    marginTop: 20,

    borderRadius: 10,
    gap: 10,
  },

  paymentImage: {
    width: 60,
    height: 60,
  },
  paymentText: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  paymentOptions: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    minHeight: 60,
    marginTop: 20,
  },
  inputContainer: {
  },
  addressContainer: {
    marginTop: 10,
    flex: 1,
    maxHeight: 120,
  },
  checkoutButton: {
    backgroundColor: "#2750E1",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10, 
    marginTop: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
