/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from './profileTabs/FovoriteTab';
import ProfileScreen from './profileTabs/ProfileTab';
import HomeScreen from './profileTabs/HomeTab';

const Tab = createBottomTabNavigator();
export default function Home() {
  const navigation=useNavigation();
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
      <Tab.Navigator  tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#262146',
        inactiveBackgroundColor: '#262146',
            style: {
                  backgroundColor: 'white',
                  paddingBottom: 3
            }
     }}>
      <Tab.Screen name="ProfileTab" component={ProfileScreen} 
         options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../images/profile2.png')                  
              }/>
         ), 
         tabBarLabel: ''             
        }}/>
        <Tab.Screen name="HomeTab" component={HomeScreen}
         options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../images/homeTab.png')                  
              }/>
         ), 
         tabBarLabel: ''             
        }}/>
       
        
         <Tab.Screen name="FavoriteTab" component={FavoriteScreen}
         options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../images/favoriteTab.png')                  
              }/>
         ), 
         tabBarLabel: ''             
        }} />

      </Tab.Navigator>
  );
}
