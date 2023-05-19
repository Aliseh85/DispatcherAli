/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useRef} from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Onboarding2=()=>{
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
    <View>
    <SafeAreaView style={styles.container}>
   

     <Text style={{top:95,alignSelf:'center'
    ,color:'white',fontSize:32}}>Dispatcher</Text>
<Text style={{color:'white',top:144,left:42,width:290,fontSize:22}}>
Search your fields of intrest and the best part..
</Text>
<Image source={require('../images/Rectangle2.png')}
     style={{position:'absolute',width:363,height:366,transform: [{rotate: '6deg'}],left:-20,bottom:-80}}/>
<Image source={require('../images/Rectangle1.png')}
     style={{position:'absolute',width:363,height:366,bottom:-120,left:-20,transform: [{rotate: '6deg'}],}}/>
    </SafeAreaView>

    </View>
  );
};

const Onboarding1=()=>{
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
    <View>
    <SafeAreaView style={styles.container}>
   

     <Text style={{top:95,alignSelf:'center'
    ,color:'white',fontSize:32}}>Dispatcher</Text>
<Text style={{color:'white',top:144,left:42,width:290,fontSize:22}}>
  Welcome to Dispatcher,
the right way to read your  news. Just open the app
</Text>
<Image source={require('../images/Rectangle2.png')}
     style={{position:'absolute',width:363,height:366,transform: [{rotate: '-30deg'}],left:-20,bottom:-80}}/>
<Image source={require('../images/Rectangle1.png')}
     style={{position:'absolute',width:363,height:366,bottom:-120,left:-20,transform: [{rotate: '-30deg'}],}}/>
    </SafeAreaView>

    </View>
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


const Onboarding=()=>{
  const carouselRef = useRef(null);
  const entries=[{'content':'Welcome to Dispatcher,the right way to read your  news. Just open the app'}];
  const renderItem = ({item}:any) => {
    return (
     <View>
     <SafeAreaView style={styles.container}>  
      <Text style={{top:95,alignSelf:'center'
     ,color:'white',fontSize:32}}>Dispatcher</Text>
  <Text style={{color:'white',top:144,left:42,width:290,fontSize:22}}>
   {item.content}
  </Text>
  <Image source={require('../images/Rectangle2.png')}
      style={{position:'absolute',width:363,height:366,transform: [{rotate: '-30deg'}],left:-20,bottom:-80}}/>
  <Image source={require('../images/Rectangle1.png')}
      style={{position:'absolute',width:363,height:366,bottom:-120,left:-20,transform: [{rotate: '-30deg'}],}}/>
     </SafeAreaView>
  
     </View>
   );
  
  
  }; 
  
return (
  <Carousel
    ref={carouselRef}
    data={entries}
    renderItem={renderItem}
  />
);}

export default Onboarding;