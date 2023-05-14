import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,Alert,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux'
import { authService } from '../../firebase/AuthService';
import { logout } from '../../store/emailSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Profile';
import EditProf2 from '../EditProfile2';


function MyProfile() {
    const navigation=useNavigation();
    const dispatch = useDispatch()
    const name = useSelector(state => state.email.name);
  
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
  
      
  
      <View style={{ flex: 1 }}>
        
      <View style={{width:'100%',height:80,backgroundColor:'white',}}>
      <Text style={{
          fontFamily:'Roboto',
        width:343,
        height:32,
        marginLeft:16,
        marginTop:15,
        fontWeight:'bold',
        fontSize:24,
        color:'#262146',
        lineHeight:32,}} >Hi {name}</Text>
        <Image source={require('../../images/profileBackground.png')} style={{position:'absolute',right:21,top:15}}/>
  
        <Image source={require('../../images/profileIcon.png')} style={{position:'absolute',right:33,top:23}}/>
  <Pressable onPress={
    ()=>
    {
      navigation.navigate('Profile');
    }
  }>
  <Text style={{
          fontFamily:'Roboto',
        width:343,
        height:32,
        marginLeft:16,
        fontSize:14,
        color:'#575565',
        lineHeight:32,}} >edit my profile</Text>
        </Pressable>
        </View>
        
           <Pressable >
           <Image source={require('../../images/settingIcon.png')} style={{position:'absolute',marginLeft:20,marginRight:20,top:15}}/>
  
        <Text style={{
          fontFamily:'Roboto',
        width:264,
        height:32,
        marginLeft:50,
        fontSize:16,
        color:'#262146',
        top:10,
        lineHeight:32,}} >Settings</Text>
  
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:15}}/>
  
      <Pressable >
      <Image source={require('../../images/termsIcon.png')} style={{position:'absolute',marginLeft:20,marginRight:20,marginTop:8}}/>
  
        <Text 
        style={{fontFamily:'Roboto',
        width:264,
        height:32,
        marginLeft:50,
        fontSize:16,
        color:'#262146',
        lineHeight:32,}} 
        >Terms & privacy</Text>
  
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:8}}/>
  
            <Pressable onPress={()=>
        {
          try{
          authService.logout();
          navigation.navigate('SignIn');
          dispatch(logout());
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
        <Image source={require('../../images/logoutIcon1.png')} style={{position:'absolute',marginLeft:20,marginRight:20,marginTop:8}}/>
        <Image source={require('../../images/logoutIcon2.png')} style={{position:'absolute',marginLeft:28,marginRight:20,marginTop:13}}/>
  
        <Text 
        style={{fontFamily:'Roboto',
        width:264,
        height:32,
        marginLeft:50,
        fontSize:16,
        color:'#262146',
        lineHeight:32,}} 
        >Logout</Text>
  
      </Pressable>
      </View>
  
  
    );
  }
  
  const Stack1 = createNativeStackNavigator();
  
  
  const ProfileScreen=()=>{
    return (
      <Stack1.Navigator>
  
      <Stack1.Screen name={'MainProfile'} component={MyProfile} />
      <Stack1.Screen name={'Profile'} component={Profile} />
      <Stack1.Screen name={'Edit2'} component={EditProf2} />
  
      </Stack1.Navigator>
    
    );
  }
  export default ProfileScreen;