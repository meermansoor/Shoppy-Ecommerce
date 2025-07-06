import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { useState } from "react";
import products from "../data/productData";

export default function ProductTile({ imgUrl, writeQty, deleteButton }) {
  const [quantity, setQuantity] = useState(1);
  
  function deleteButtonComp() {
    if (deleteButton) {
      return (
        <View>
          <TouchableOpacity style={styles.ItemDeleteButton}>
            <Ionicons name="trash" size={20} color="black" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  function quantityComp() {
    if (writeQty) {
      return (
        <View>
          <TouchableOpacity
            style={[styles.ItemQuantityButton, { borderRightWidth: 1 }]}
            onPress={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Ionicons name="remove" size={12} color="black" />
          </TouchableOpacity>
          <Text style={styles.ItemQuantityText}>{quantity}</Text>
          <TouchableOpacity
            style={[styles.ItemQuantityButton, { borderLeftWidth: 1 }]}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Ionicons name="add" size={12} color="black" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
          <Text style={styles.ItemQuantityText}>{quantity}</Text>
      );
    }
  }

  return (
    <View style={styles.cartItemsContainer}>
      <Image
        source={require("../images/CategoryImgs/electronics.png")}
        style={styles.cartItemImage}
      />
      <View style={styles.ItemDetailsContainer}>
        <Text style={styles.ItemName}>{products[0].title}</Text>
        <Text style={styles.ItemPrice}>${products[0].price}</Text>
        <View style={styles.ItemQuantityContainer}>
          <Text style={styles.ItemQuantityText}>Quantity</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              width: 96,
              height: 25,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {quantityComp()}
          </View>
        </View >
        <View style={{marginTop: moderateScale(10)}}>
        {deleteButtonComp()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    textAlign: "center",
    paddingBottom: moderateScale(1),
  },
  ItemPrice: {
    fontSize: moderateScale(15),
    fontWeight: "400",
    color: "#2750E1",
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
});
