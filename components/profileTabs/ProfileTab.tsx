import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,Alert,Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { authService } from '../../firebase/AuthService';
import { logout } from '../../store/emailSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Profile';
import EditProf2 from '../EditProfile2';
import Terms from '../Terms';
import Settings from '../Settings';


const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
const widthScale = (size:number) => (width / guidelineBaseWidth) * size;
const heightScale = (size:number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size:number, factor = 0.5) => size + (widthScale(size) - size) * factor;
function MyProfile() {
    const navigation=useNavigation<any>();
    const dispatch = useDispatch()
    const name = useSelector((state:{email:any}) => state.email.name);
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
        
      <View style={{flexDirection:'row',display:'flex',width:widthScale(375),height:heightScale(79),backgroundColor:'white',}}>
      <View style={{flex:1}}>
      <Text style={{
        fontFamily:'Roboto',
        width:widthScale(343),
        height:heightScale(32),
        marginLeft:widthScale(16),
        marginTop:heightScale(15),
        fontWeight:'bold',
        fontSize:24,
        color:'#262146',
        }} >Hi {name}</Text>
<Pressable onPress={
    ()=>
    {
      navigation.navigate('Profile');
    }
  }>
  <Text style={{
        fontFamily:'Roboto',
        width:widthScale(343),
        height:heightScale(19),
        fontSize:14,
        fontWeight:'400',
        marginLeft:widthScale(16),
        color:'#575565',
        }} >
          edit my profile
          </Text>
  </Pressable>

</View>
     <Image source={require('../../images/profileBackground.png')} style={{}}/>
    <Image source={require('../../images/profileIcon.png')} style={{right:36}}/>
        </View>
  <View>
      <Pressable  style={{flexDirection:'row'}} onPress={()=>
        {
          navigation.navigate('Settings');
        }} >
           <Image source={require('../../images/settingIcon.png')} style={{marginLeft:widthScale(16),marginTop:heightScale(22.5)}}/>
        <View>
              <Text style={{
            fontFamily:'Roboto',
              width:widthScale(264),
              fontSize:16,
              color:'#262146',
              marginTop:heightScale(16),
              marginLeft:widthScale(8),
              lineHeight:32,}} >Settings</Text>
      </View>
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:15}}/>
  
      <Pressable style={{flexDirection:'row'}} onPress={()=>
        {
          navigation.navigate('Terms');
        
        }}>
      <Image source={require('../../images/termsIcon.png')} style={{marginLeft:20,marginRight:20,marginTop:8}}/>
  
        <Text 
        style={{fontFamily:'Roboto',
        width:264,
        height:32,
        fontSize:16,
        color:'#262146',
        lineHeight:32,}} 
        >Terms & privacy</Text>
  
      </Pressable>
      <Image source={require('../../images/Line2.png')} style={{marginLeft:20,marginRight:20,width:335,marginTop:8}}/>
  
      <Pressable style={{flexDirection:'row'}} onPress={()=>
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
          };
        }}>
        <Image source={require('../../images/logoutIcon1.png')} style={{marginLeft:20,marginRight:20,marginTop:8}}/>
        <Image source={require('../../images/logoutIcon2.png')} style={{position:'absolute',marginLeft:28,marginRight:20,marginTop:13}}/>
        <Text 
        style={{fontFamily:'Roboto',
        width:264,
        height:32,
        fontSize:16,
        color:'#262146',
        lineHeight:32,}} 
        >Logout</Text>
      </Pressable>
      </View>
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
      <Stack1.Screen name={'Terms'} component={Terms} />
      <Stack1.Screen name={'Settings'} component={Settings} />

      </Stack1.Navigator>
    
    );
  }
  export default ProfileScreen;