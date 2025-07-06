import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import products from "../data/productData";
import ProductTile from "../components/productTile";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function ProfileScreen() {
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Profile</Text>

        <View style={styles.profileContainer}>
          <View style={styles.nameCard}>
            <View>
              <Text style={styles.nameText}>Hi Meer</Text>
              <Text style={styles.emailText}>meer@gmail.com</Text>
            </View>
            <View>
              <Image
                source={require("../images/profile.png")}
                style={styles.profileImage}
              />
            </View>
          </View>
          <Text style={styles.categoryText}> Shipping Address</Text>
          <View style={styles.addressCard}>
            <View style={styles.addressHeader}>
              <Text style={styles.headerText}>Pakistan</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.addressText}>123 Main St, Anytown, USA</Text>
          </View>
          <Text style={styles.categoryText}> Payment Method</Text>
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
              <Text style={styles.paymentText}>More Options</Text>
            </View>
          </View>
          <Text style={styles.categoryText}>Order History</Text>
          <View>
            
              <ProductTile
                imgUrl={require("../images/CategoryImgs/electronics.png")}
                writeQty={false}
                deleteButton={true}
              />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 50,
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  nameCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  emailText: {
    color: "gray",
  },
  categoryText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  addressCard: {
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    gap: 10,
    borderRadius: 10,
    height: 100,
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  editText: {
    color: "blue",
    fontSize: 15,
  },
  paymentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },

  paymentImage: {
    width: 50,
    height: 50,
  },
  paymentText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  paymentOptions: {
    alignItems: "center",
  },
  cartItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 10,
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
});
