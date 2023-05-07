import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';

const Splash1=()=>{
  const navigation=useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Splash',
          headerShown:false,
        })
    }
  )
  return (
    <Pressable onPress={
        ()=>navigation.navigate('SignIn')
        } style={styles.container}>
    <SafeAreaView style={styles.container}>
   
    <Image source={require('../images/logo1.png')}
     style={{alignSelf:'center',width:126.91,height:128,marginTop:61}}/>

     <Text style={
        styles.s1}
    >Dispatcher</Text>

    </SafeAreaView>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
    
  },
  s1:{
        top:440,
        fontWeight:700,
        alignSelf:'center'
      ,color:'white',
      fontSize:32,
      
  }

  
});

export default Splash;