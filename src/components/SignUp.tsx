import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  Upperpart: {
    width: '100%',
    height: '100%',
    backgroundColor: '#262146',
  },
  Lowerpart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    top: 81,
    backgroundColor: '#F8F8FF',
    borderRadius: 0,
  },
  login: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontweight: '700',
    fontSize:24,
    lineHeight:22,
    color:'#5A5A89',
    width:93,
    height:22,
    marginLeft:20,
    marginTop:40,
  },
  textinputback:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:0,
    paddingRight:12,
    paddingLeft:16,
    paddingBottom:0,
    gap:10,
    width:335,
    height:44,
    backgroundColor:'white',
    borderRadius:4,
    marginLeft:20,
    marginRight:20,
    marginTop:24,

  },
  input: {
    fontFamily:'Roboto',
    fontStyle:'normal',
    alignItems:'center',
    color:'white',
  },
  signupButtun:
  {
  
    display:'flex',
    flexDirection:'row',
    backgroundColor:"#BDBDBD",
    marginTop:28.75,
    marginLeft:20,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:335,
    height:36,
  },
  loginbutton: {
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
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
reEnterPasswordBackground:{

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
}
,

});
const SignUp = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
  
    const signUp = async () => {
      if (password === rePassword) {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User created & signed up!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
  
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
  
            console.error(error);
          });
      } else {
        console.log('Passwords do not match!');
      }
    };
  
    return (
      <View style={styles.Upperpart}>    
      <Image source={require('../images/Picture1.png')} style={{alignSelf:'center', margin:30}} />
      <View style={styles.Lowerpart}>
          <Text style={styles.login}>SignUp</Text>
          <View style={styles.textinputback}>
          <TextInput
           style={styles.input}
            placeholder="your email" 
            autoCapitalize='none' 
            value={email} onChangeText={setEmail} 
            />

          </View>
        <View style={styles.passwordBackground}>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.reEnterPasswordBackground}>
          <TextInput
            style={styles.input}
            placeholder="re-enter password"
            secureTextEntry
            value={password}
            onChangeText={setRePassword}
          />
        </View>
        <TouchableOpacity style={styles.loginbutton} onPress={signUp}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtun} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };
  
  export default SignUp;