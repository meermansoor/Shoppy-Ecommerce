import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";

export default function AddressTile({address, onEdit, onDelete}) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addressCard: {
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    padding: 10,
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editText: {
    color: "blue",
    fontSize: 15,
  },
  addressText: {
    fontSize: 16,
  },
});
