import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import Tabs from './navigations/tabs';

import { home, scanner, workorder, login, register, trasportation, addworkorder } from './screens';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown:false}}
        />
         <Stack.Screen

          screenOptions={{
            headerShown: true
          }}
          name="AddWorkOrder"
          component={addworkorder}
          options={{headerShown:true}}
        />

        <Stack.Screen
          screenOptions={{
            headerShown: true
          }}
          name="Scanner"
          component={scanner}
          options={{headerShown:true}}
        />

        <Stack.Screen
          screenOptions={{
            headerShown: true
          }}
          name="Transportations"
          component={trasportation}
          options={{headerShown:true}}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
