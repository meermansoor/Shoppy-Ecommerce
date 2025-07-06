import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import categories from '../data/categoryData';

export default function CategoryTile({ id, title, source, onPress }) {

    
    const navigation = useNavigation();

    const selectedCategory = categories.find(cat => cat.id === id);
    return (
        <TouchableOpacity onPress={() => navigation.navigate('categoryDetailsScreen')} style={styles.container}>
            <Image source={{uri: source}} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 45,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    title: {
        paddingBottom: 10,
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
