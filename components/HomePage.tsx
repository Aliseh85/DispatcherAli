import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function HomeScreen() 
{
  const navigation =useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'HomePage',
          headerShown:false,
        })
    }
  )
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  const navigation =useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'profile',
          headerShown:false,
        })
    }
  )
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>profile!</Text>
    </View>
  );
}
function favoriteScreen() {
  const navigation =useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'favorie',
          headerShown:false,
        })
    }
  )
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>favorite!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation =useNavigation();
  useLayoutEffect(
    ()=>{
      navigation.setOptions(
        {
          headerTitle:'HomePage',
          headerShown:false,
        })
    }
  )
  return (
      <Tab.Navigator>
        <Tab.Screen name="profile" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="favorites" component={favoriteScreen} />
      </Tab.Navigator>
  );
}
