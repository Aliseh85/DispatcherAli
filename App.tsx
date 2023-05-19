/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useEffect}from 'react';
import {

  StyleSheet,
} from 'react-native';
import Sign from './components/SignIn';
import Sign1 from './components/SignUp';
// import Onboarding from './components/Onboarding';
import Home from './components/HomePage';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from './store/store'
import SplashScreen from "react-native-splash-screen";


export type MainStackTypes={'Onboard':undefined,'SignIn':undefined,'SignUp':undefined,'HomePage':undefined};
const Stack = createNativeStackNavigator<MainStackTypes>();


function App(){
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
<Provider store={store}>
  <NavigationContainer theme={theme}>
    <Stack.Navigator>

    {/* <Stack.Screen name={'Splash'} component={Splash1} /> */}
    {/* <Stack.Screen name={'Onboard'} component={Onboarding} /> */}

      <Stack.Screen name={'SignIn'} component={Sign} />
      <Stack.Screen name={'SignUp'} component={Sign1} />
      <Stack.Screen name={'HomePage'} component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
const styles = StyleSheet.create({
  backGround:
  {
    backgroundColor:"#262146",
    height:'100%',
    width:'100%',
  },
});
export default App;

