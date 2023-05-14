/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import {
    SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { authService } from '../firebase/AuthService';
import { useSelector, useDispatch } from 'react-redux'
import { login, update } from '../store/emailSlice'

const Sign=()=>{
  const isLogin = useSelector(state => state.email.isLogin);
  const email = useSelector(state => state.email.email);

  const dispatch = useDispatch()
  const navigation=useNavigation();
  const[password,setPassword]=useState('')

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
    <SafeAreaView style={styles.container}>
      
    <Image source={require('../images/logo1.png')} style={{alignSelf:'center',width:126.91,height:128,marginTop:61}}/>
     <View style={styles.background}>
        <Text style={styles.logIn}>Login </Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your email' value={email}
             onChangeText={text=>dispatch(update(text))}/>
        </View>
        <View style={styles.passwordBackground}>
            <TextInput style={styles.textInput} placeholder='Password'
            value={password} secureTextEntry={true}
            onChangeText={text=>setPassword(text)} />
            <Image source={require('../images/Vector.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
            <Image source={require('../images/Rectangle609.png')} style={{position:'absolute',marginLeft:295,width:30,height:19}}/>
        </View>
        <Image source={require('../images/Line2.png')} style={{position:'absolute',marginLeft:20,marginRight:20,width:335,marginTop:247}}/>

        <Pressable style={styles.loginButtun} onPress={()=>
          {
            try{
            authService.login(email,password);
            navigation.navigate('HomePage');
            dispatch(login());
          }
            catch(e:any){
              {
                Alert.alert('Error', e.message, [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }

            }
            ;
          }}>
          <Text style={{color:'white'}}>LOGIN</Text>
          <Image source={require('../images/Stroke.png')} style={{marginLeft:3,width:16,height:12}}/>

        </Pressable>
        <Pressable style={styles.signupButtun} onPress={
          ()=>navigation.navigate('SignUp')
          }>
          <Text>SIGNUP</Text>
        </Pressable>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
    
  },
  
  background:
  {
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#F8F8FF',
    top:61,
    width:'100%',
    height:'100%',
  },
  logIn:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 25,
    color:'#5A5A89',
    width:93,
    height:28,
    marginTop:40,
    marginLeft:20,
  },
    textInputBackground:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:0,
    paddingRight:12,
    paddingBottom:0,
    paddingLeft:16,

    gap: 10,
    width: 335,
    height: 44,
    backgroundColor: 'white',
    borderRadius:4,
    marginLeft:20,
    marginRight:20,
    marginTop:24,
  },
textInput:
{
    fontFamily: 'roboto',
    fontStyle: 'normal',
    alignItems: 'center',
    color: 'black',
},
passwordBackground:
{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop:0,
  paddingRight:12,
  paddingBottom:0,
  paddingLeft:16,

  gap: 10,
  width: 335,
  height: 44,
  backgroundColor: 'white',
  borderRadius:4,
  marginLeft:20,
  marginRight:20,
  marginTop:24,
},
loginButtun:
{
  display:'flex',
  flexDirection:'row',
  backgroundColor:"#6CA4E1",
  marginTop:98.25,
  marginLeft:20,
  marginRight:20,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  width:335,
  height:36,
},
loginImage:{
  display:'flex',
  marginLeft:8,
  width:20,
  height:20,

},
signupButtun:
{

  display:'flex',
  flexDirection:'row',
  backgroundColor:"#F1F1F9",
  marginTop:20,
  marginLeft:20,
  marginRight:20,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  width:335,
  height:36,
}
  
});

export default Sign;
