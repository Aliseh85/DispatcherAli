import React from 'react';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Splash from './src/components/Splash';
import Favorite from './src/screens/Favorite';
import HomePage from './src/screens/HomePage';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
