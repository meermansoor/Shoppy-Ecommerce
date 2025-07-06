import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CheckoutSummary from "../components/checkoutSummary";
import { useSelector } from "react-redux";
import products from "../data/productData";

export default function CartScreen({navigation, route}) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shippingPrice, setShippingPrice] = useState(10);

  const cartItems = useSelector((state) => state.cart.items);


  return (
    <ScrollView style={styles.container}>
    <StatusBar style="light" />
      <View style={styles.shippingAddress}>
        <Text style={styles.shippingAddressText}>Shipping Address</Text>
        <View style={styles.shippingAddressContainer}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: moderateScale(4)}}>
            <Text style={[styles.shippingAddressText, {fontSize: moderateScale(20)}]}>Pakistan</Text>
            <TouchableOpacity>
                <Text style={[styles.shippingAddressText, {fontSize: moderateScale(18) , color: "#2750E1"}]}>Change</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", padding: moderateScale(4)}}>
                <Text style={[styles.shippingAddressText, {fontSize: moderateScale(16), fontWeight: "400"}]}>123 Main St, Anytown, USA</Text>
            </View>
        </View>
        <View style={styles.cartItemsContainer}>
            <Image source={require("../images/CategoryImgs/electronics.png")} style={styles.cartItemImage} />
            <View style={styles.ItemDetailsContainer}>
                <Text style={styles.ItemName}>{products[0].title}</Text>
                <Text style={styles.ItemPrice}>${products[0].price}</Text>
                <View style={styles.ItemQuantityContainer}>
                    <Text style={styles.ItemQuantityText}>Quantity</Text>
                    <View style={{borderWidth: 1, borderColor: "black", width: 96, height: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <TouchableOpacity style={[styles.ItemQuantityButton, {borderRightWidth: 1}]} onPress={() => {
                        if (quantity > 1) {
                            setQuantity(quantity - 1);
                        }
                    }}>
                            <Ionicons name="remove" size={12} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.ItemQuantityText}>{quantity}</Text>
                        <TouchableOpacity style={[styles.ItemQuantityButton, {borderLeftWidth: 1}]} onPress={() => setQuantity(quantity + 1)}>
                            <Ionicons name="add" size={12} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                    <TouchableOpacity style={styles.ItemDeleteButton}>
                        <Ionicons name="trash" size={20} color="black" />
                    </TouchableOpacity>
            </View>
        </View>
      </View>
      <CheckoutSummary itemPrice={products[0].price} shippingPrice={10} quantity={quantity} totalPrice={quantity * products[0].price} />
      <TouchableOpacity style={styles.checkOutButton} onPress={() => navigation.navigate("CheckoutScreen")}>
            <Text style={styles.checkOutButtonText}>Proceed to Checkout</Text>
           </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: moderateScale(10),
  },
  shippingAddress: {
    width: "100%",
    marginTop: moderateScale(20),
    padding: moderateScale(15),
    borderBottomRightRadius: moderateScale(60),
    borderBottomLeftRadius: moderateScale(60),
  },
  shippingAddressText: {
    color: "black",
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  shippingAddressContainer: {
    width: "100%",
    height: moderateScale(100),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
    padding: moderateScale(10),
    elevation: 5,
  },
  cartItemsContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: moderateScale(30),
    padding: moderateScale(12),
    height: moderateScale(170),
    backgroundColor: "white",
  },
  cartItemImage: {
    width: 160,
    height: 150,
    borderRadius: moderateScale(10),
  },
  ItemDetailsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: moderateScale(10),
  },
  ItemQuantityContainer: {
    marginTop: moderateScale(10),
    flexDirection: "row",
    gap: moderateScale(10),
    alignSelf: "flex-end",
  },
  ItemQuantityButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 23,
    width: 23,
    padding: moderateScale(3),

  },
  ItemQuantityText: {
    fontSize: moderateScale(15),
    fontWeight: "400",
    paddingBottom: moderateScale(1),
  },
  ItemPrice: {
    fontSize: moderateScale(15),
    fontWeight: "400",
    color: "#2750E1",
  },
  checkOutSummaryContainer: {
    width: "100%",
    height: moderateScale(100),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
    padding: moderateScale(10),
  },
  checkOutSummaryText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  checkOutButton: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#2750E1",
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(10),
},
checkOutButton: {
  alignSelf: "center",
  width: "90%",
  backgroundColor: "#2750E1",
  padding: moderateScale(10),
  borderRadius: moderateScale(10),
  alignItems: "center",
  justifyContent: "center",
  marginTop: moderateScale(10),
},
checkOutButtonText: {
  color: "white",
  fontSize: moderateScale(16),
  fontWeight: "bold",
},
});

