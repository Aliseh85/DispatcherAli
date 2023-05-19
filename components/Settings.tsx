import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect} from 'react';
import {
  Text,
  Pressable,
  Image,StyleSheet,ScrollView,
} from 'react-native';


function Settings() {
    const navigation=useNavigation<any>();
    useLayoutEffect(
      ()=>{
        navigation.setOptions(
          {
            headerTitle:'Sign In',
            headerShown:false,
          })
      }
    )
    return (  
      <ScrollView style={{ flex: 1,backgroundColor:'white', }}>
         <Pressable style={{flexDirection:'row',width:'100%',height:55,backgroundColor:'#262146' }} onPress={()=>
            {
                navigation.navigate('MainProfile');
            }}>
        <Image source={require('../images/ForwardIcon.png')} style={{marginTop:15,}}/>
        <Text style={{color:'white',marginTop:15,fontSize:16}}> Back</Text>

        </Pressable>
        <Text style={{width:343,height:32,fontSize:24,color:'#262146',marginLeft:16,}}>Settings</Text>

      </ScrollView>
  
  
    );
  }
  const styles = StyleSheet.create({editProfile:{
  }});
  export default Settings