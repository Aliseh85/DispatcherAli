import React, {useState} from 'react';
import { firebase } from '@react-native-firebase/auth';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
///////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  Father: {
    width: '100%',
    height: '100%',
  },
  Upperpart: {
    width: '100%',
    height: '45%',
    left: 0,
    top: 0,
    backgroundColor: '#262146',
  },
  Lowerpart: {
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
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignIn = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const signIn = async () => {
      firebase.auth()
        .signInWithEmailAndPassword('aliseh32@gmail.com', 'lareen1852000')
        .then(() => {
          console.log('Usercreated & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email')
            console.log('That email address is invalid!');
          console.error(error);
        });
    };
  return (
    <View style={styles.Father}>
      <View style={styles.Upperpart} />
      <View style={styles.Lowerpart}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>login</Text>
          <TextInput style={styles.input} placeholder="your email" autoCapitalize='none' value={email} onChangeText={setEmail} />
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
        <TouchableOpacity style={styles.buttonContainer2} onPress={signIn}>
          <Text style={styles.buttonText2}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;