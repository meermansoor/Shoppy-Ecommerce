import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function CategoryDetailScreen() {
    return (

        <ScrollView style={styles.container}>
            <Text>Category Detail Screen</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})  