import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image} from 'react-native';




function SplashScreen() {
    const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
     <View style={styles.topBox}></View>
     <View style={styles.bottomBox}></View>
     <View style={styles.logoBox}>
        <Image source={require('../images/logo.png')} style={styles.logo}/>
     </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox:{
    position: 'absolute',
    top: -680,
    width: '110%',
    height: 996,
    backgroundColor:'#2750E1' ,
    borderBottomRightRadius: 400,
    

  },
  bottomBox:{
    position: 'absolute',
    top: 258,
    width: '110%',
    height: 674,
    backgroundColor:'#2750E1' ,
    borderTopLeftRadius: 400,
  },
  logoBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  logo:{
    width: 260,
    height: 100,
  }

});
