import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      { <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator> }
    </NavigationContainer>
  );
}

export default App;

