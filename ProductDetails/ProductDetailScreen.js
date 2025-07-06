import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetailScreen({navigation , route}) {

    const { product } = route.params;

    const header = () => {
        return (
            <View>
                <Text>Product Detail</Text>
            </View>
        )
    }


    return (
        <ScrollView style={styles.container}>
            <Text>Product Detail</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
