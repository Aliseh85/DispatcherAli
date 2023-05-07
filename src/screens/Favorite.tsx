import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';

const Favorite=()=>{
  const navigation=useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'Favorite',
          headerShown:false,
        })
    }
  )
  return (
    <Pressable>
    <SafeAreaView style={styles.container}>
   
    <Image source={require('../images/star.png')}
     style={{alignSelf:'center',width:126.91,height:128,marginTop:61}}/>
     <Text style={{top:440,fontWeight:700,alignSelf:'center'
    ,color:'white',fontSize:32}}>Welcome to the Favorite page</Text>
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

  
});

export default Favorite;