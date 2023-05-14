import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,Alert,StyleSheet,TextInput,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux'
import { authService } from '../firebase/AuthService';
import { logout } from '../store/emailSlice';
import {getPosts} from '../store/newsSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { editName } from '../store/emailSlice'

function EditProf2() {
    const navigation=useNavigation();
    const dispatch = useDispatch()
    const email = useSelector(state => state.email.email);
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
      <View style={{ flex: 1,backgroundColor:'white', }}>
          
        <Image source={require('../images/profileBackground.png')} style={{position:'absolute',right:140,top:10,width:101,height:101,}}/>
        <Image source={require('../images/profileIcon.png')} style={{position:'absolute',right:169,top:20,width:44,height:47}}/>  
        <Pressable style={{position:'absolute',top:120}} onPress={()=>
            {
                Alert.alert('Profilr picture', 'Upload new image for your personal Icon', [
                    {
                      text: 'Gallery',
                     
                    },
                    {text: 'Camera', },
                  ]);
            }} >
          <Text style={styles.title} >Change profile picture</Text>
        </Pressable>
        <Text style={styles.name}>Name </Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your name'
             onChangeText={text=>dispatch(editName(text)) }
             />
        </View>

        <Text style={styles.email}>Email </Text>
        <View style={styles.textInputBackground}>
            <TextInput style={styles.textInput} placeholder='your email'
             />
        </View>
      </View>
  
  
    );
  }
  const styles = StyleSheet.create({editProfile:{
position:'absolute',
top:20,right:26,fontSize:12,fontWeight:700,color:'#5A5A89',backgroundColor:'#E5E5E5'
  },
  title:{
    fontFamily:'Roboto',
    width:343,
    height:32,
    marginLeft:119,
    fontWeight:700,
    fontSize:16,
    color:'#262146',
    lineHeight:32,},
  name:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 32,
    color:'#262146',
    width:93,
    height:28,
    marginTop:190,
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
    borderColor:'#D9DBE9',
    borderWidth:1,
    borderRadious:4,
  },textInput:
  {
      fontFamily: 'roboto',
      fontStyle: 'normal',
      alignItems: 'center',
      color: 'black',
  },

  email:
  {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 32,
    color:'#262146',
    width:93,
    height:28,
    marginLeft:20,
  },
  });
  export default EditProf2;