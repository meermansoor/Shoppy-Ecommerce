import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import ImageGallery from '../components/ImageGallery';

export default function ProductDetailScreen({navigation , route}) {


    return (
        <SafeAreaView>
        <View style={styles.container}>

            <Text>Product Detail</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    }
})
