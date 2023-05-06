import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigation =useNavigation();
function Profilescreen() {
  return (
      <Button
        title=""
        onPress={() => navigation.navigate('Profile')}
      />
  );
}
function Favoritescreen() {
  return (
      <Button
        title=""
        onPress={() => navigation.navigate('Favorite')}
      />
  );
}
function Homescreen() {
  return (
      <Button
      title=""
      onPress={() => {
        navigation.navigate('HomePage');
      }}
    />
  );
}

function Homepage() {
 
    return (
        <View style={styles.screen}>
          <SafeAreaView style={styles.tabbar}>
        <Tab.Navigator>
               <Tab.Screen name={'homepage'} component={Homescreen}
               options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="Home" color={'white'} size={1}  />
                ),
              }} />
               <Tab.Screen name={'profile'} component={Profilescreen} 
                options={{
                  tabBarLabel: 'account',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="Profile" color={'white'} size={1}  />
                  ),
                }}
                />
               <Tab.Screen name={'favorites'} component={Favoritescreen}
                options={{
                  tabBarLabel: 'favorites',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="star" color={'white'} size={1} />
                  ),
                }}
               />
           </Tab.Navigator>
           </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      width: '100%',
      height: '100%',
      backgroundColor: '#262146',
    },
    tabbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0, 34:0,
  
      position: 'absolute',
      width: 375,
      height: 64,
      right: 0,
      top: `calc(50% - 64px/2 + 301.5px)`,
  
      /* Grayscale / Body */
      background: '#262146',
      border: '1px solid #262146',
  
      /* Drop Shadow Large */
      boxShadow: '0px 32px 64px rgba(0, 0, 0, 0.05)',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,    
    },
  });
  

export default Homepage;
