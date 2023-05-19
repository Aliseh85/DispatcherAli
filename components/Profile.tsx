import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,StyleSheet,TextInput,Dimensions
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

function Profile() {
    const navigation=useNavigation<any>();
    const dispatch = useDispatch()
    const email = useSelector((state:{email:any}) => state.email.email);
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
      <View style={{ flex: 1,backgroundColor:'white', }}>
    <Text style={{
        fontFamily:'Roboto',
        width:343,
        height:32,
        marginLeft:16,
        marginTop:15,
        fontWeight:'bold',
        fontSize:24,
        color:'#262146',
        lineHeight:32,}} >My profile</Text>
          <Pressable style={styles.editProfile} onPress={()=>{
            navigation.navigate('Edit2');
          }}>
          <Text>Edit profile</Text>
        </Pressable>
        <Image source={require('../images/profileBackground.png')} style={{position:'absolute',right:140,top:100,width:101,height:101,}}/>
        <Image source={require('../images/profileIcon.png')} style={{position:'absolute',right:169,top:122,width:44,height:47}}/>  
      
        <Text style={styles.name}>Name </Text>
        <View style={styles.textInputBackground}>
            <Text>{name}</Text>
        </View>

        <Text style={styles.email}>Email </Text>
        <View style={styles.textInputBackground}>
            <Text style={styles.textInput}>{email}</Text>
        </View>
      </View>
  
  
    );
  }
  const styles = StyleSheet.create({editProfile:{
position:'absolute',
top:20,right:26,fontSize:12,fontWeight:700,color:'#5A5A89',backgroundColor:'#E5E5E5'
  },
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
  export default Profile;





  