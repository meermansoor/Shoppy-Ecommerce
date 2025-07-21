import React, { useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";

import CategoryTile from "../components/categoryTile";
import LoadingIndicator from "../components/laodingIndicator";
import { moderateScale } from 'react-native-size-matters';
import { StatusBar } from "expo-status-bar";
import { getProducts, getCategories } from "../utils/http";


function HomePage({navigation}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
       

        const productsData = await getProducts();
        const categoriesData = await getCategories();
        
        setProducts(productsData);
        setCategories(categoriesData);

        const temp = productsData.map(product => product.imageUrl);
        setProductImages(temp);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);



  if(isLoading){
    return <LoadingIndicator />
  }

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="grey" />
          <TextInput
            placeholder="Search for products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{ flex: 1, marginLeft: moderateScale(10) }}
          />
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons name="cart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('WishlistScreen')}>
            <Ionicons name="heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

          <Image
            source={require("../images/banner.png")}
            style={styles.banner}
          />

          <SectionHeader title="Categories" />
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <CategoryTile
                id={item.id}
                title={item.title}
                source={item.imageUrl}
              />
            )}
            contentContainerStyle={{ paddingBottom: moderateScale(10) }}
          />

          <SectionHeader title="Most Popular Products" />
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ marginHorizontal: moderateScale(10) }}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ width: moderateScale(150), height: moderateScale(150), borderRadius: moderateScale(20) }}
                />
                <Text>{item.title}</Text>
                <Text style={styles.discountText}>Discount</Text>
                <Text style={styles.priceText}>Price</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: moderateScale(3) }}
          />

          <SectionHeader title="Aamar Just For You" />
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ margin: moderateScale(10) }} >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ width: moderateScale(150), height: moderateScale(150), borderRadius: moderateScale(15) }}
                />
                <Text style={{ fontWeight: "bold", marginTop: moderateScale(5) }}>{item.title}</Text>
                <Text style={styles.discountText}>Discount {item.discount}% off</Text>
                <Text style={styles.priceText}>Price: ${item.price}</Text>
              </TouchableOpacity>
            )}
          />

          <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1, borderWidth: 1, borderColor: "grey", borderRadius: 10,}}>
            <TouchableOpacity style={{ marginVertical: moderateScale(4), padding: moderateScale(9), justifyContent: "center", paddingHorizontal: moderateScale(5) }} onPress={() => navigation.navigate('ProductDetailScreen', { product: item.id })}>
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: moderateScale(180), height: moderateScale(180), borderRadius: moderateScale(15) }}
              />
              <Text style={{ fontWeight: "bold", marginTop: moderateScale(5) }}>{item.title}</Text>
              <Text style={styles.discountText}>Discount {item.discount}% off</Text>
              <Text style={styles.priceText}>Price: ${item.price}</Text>
            </TouchableOpacity>
            </View>
          )}
          />
    </>
  );

  const featuredProducts = Array.isArray(products) ? products.slice(0, 6) : []; // mock featured products

  return (
    <>
      <StatusBar style="light" />
      <FlatList
        data={featuredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: moderateScale(10) }}>
            {/* <Image
              source={{ uri: item.imageUrl }}
              style={{ width: moderateScale(150), height: moderateScale(150), borderRadius: moderateScale(15) }}
            />
            <Text style={{ fontWeight: "bold", marginTop: moderateScale(5) }}>{item.title}</Text>
            <Text style={styles.discountText}>Discount {item.discount}% off</Text>
            <Text style={styles.priceText}>Price: ${item.price}</Text> */}
          </View>
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.container}
      />
    </>
  );
}

const SectionHeader = ({ title }) => (
  <View style={styles.categoriesContainer}>
    <View style={styles.categories}>
      <Text style={styles.categoriesText}>{title}</Text>
      <Text style={styles.categoriesSubText}>Based on your interest</Text>
    </View>
    <TouchableOpacity style={styles.categoriesButton}>
      <Text style={styles.categoriesButtonText}>View all</Text>
      <FontAwesome6 name="chevron-right" size={moderateScale(13)} color="black" />
    </TouchableOpacity>
  </View>
);

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: moderateScale(20),
  },
  header: {
    width: "100%",
    height: moderateScale(160),
    borderBottomRightRadius: moderateScale(600),
    backgroundColor: "#2750E1",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    justifyContent: "space-around",
    paddingVertical: moderateScale(12),
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    height: moderateScale(49),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
  },
  icons: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection: "row",
    gap: moderateScale(5),
    paddingRight: moderateScale(10),
  },
  banner: {
    height: moderateScale(173),
    width: "96%",
    alignSelf: "center",
    marginVertical: moderateScale(10),
    overflow: "hidden",
  },
  categories: {
    paddingHorizontal: moderateScale(10),
  },
  categoriesText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  categoriesSubText: {
    fontSize: moderateScale(12),
    color: "#666",
  },
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(5),
    marginTop: moderateScale(10),
  },
  categoriesButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(2),
    borderColor: "#2750E1",
    borderRadius: moderateScale(50),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    gap: moderateScale(5),
  },
  categoriesButtonText: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: "#2750E1",
  },
  discountText: {
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "grey",
  },
  priceText: {
    fontSize: moderateScale(13),
    fontWeight: "bold",
    color: "green",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(50),
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#333',
  },
});
