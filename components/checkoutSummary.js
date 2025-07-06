import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutSummary({itemPrice, shippingPrice, quantity, totalPrice }) {
    return (
        <>
                <View style={styles.container}> 
        <Text style={styles.checkOutSummaryText}>Checkout Summary</Text>
           <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", padding: moderateScale(10), gap:10}}>
           <View style={styles.checkOutSummaryContainer}>
                <Text style={styles.checkOutSummaryText}>•	Subtotal</Text>
                <Text style={styles.checkOutSummaryText}>•	Shipping</Text>
                <Text style={styles.checkOutSummaryText}>•	Total</Text>
            </View>
            <View style={styles.checkOutSummaryContainer}>

                <Text style={styles.checkOutSubText}>${itemPrice * quantity}</Text>
                <Text style={styles.checkOutSubText}>${shippingPrice}</Text>
                <Text style={styles.checkOutSubText}>${totalPrice + shippingPrice}</Text>
            </View>
           </View>
           <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding:20, gap:10}}>
            <Text style={[styles.checkOutSummaryText,]}>
                Total Payment: 
            </Text>
            <Text style={[styles.checkOutSummaryText,]}>
                ${totalPrice + shippingPrice}
            </Text>
           </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: moderateScale(10),
        padding: moderateScale(10),
        marginTop: moderateScale(10),
 
    },
    checkOutSummaryText: {
        fontSize: moderateScale(14),
        fontWeight: "bold",
    },
    checkOutSubText: {
        fontSize: moderateScale(14),
        fontWeight: "400",
    },
    checkOutSummaryContainer: {
        justifyContent: "space-between",
    },
   
})                  