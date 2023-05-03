import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  father: {
    width: '100%',
    height: '100%',
  },
  upperPart: {
    width: '100%',
    height: '45%',
    backgroundColor: '#262146',
  },
  lowerPart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 40,
    marginVertical: 24,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 250,
    backgroundColor: '#F8F8FF',
    borderRadius: 0,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: 'grey',
    padding: 12,
    borderRadius: 4,
    width: '100%',
    height: 50,
    marginBottom: 10,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonContainer2: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
    width: '100%',
    height: 50,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonText2: {
    color: 'white',
    fontSize: 18,
  },
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
      <View style={styles.father}>
        <View style={styles.upperPart} />
        <View style={styles.lowerPart}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="password"
              style={styles.input}
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Re-enter Password"
              secureTextEntry
              value={rePassword}
              onChangeText={setRePassword}
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer2} onPress={SignUp}>
          <Text style={styles.buttonText2}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default SignUp;