import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
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

