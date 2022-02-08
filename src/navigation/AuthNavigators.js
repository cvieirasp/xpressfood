import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';

const Stack = createNativeStackNavigator ();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignInWelcomeScreen">
      <Stack.Screen 
        name='SignInScreen'
        component={SignInScreen}
        options={{
          headerShown: false, ...TransitionPresets.RevealFromBottomAndroid
        }}
      />      
      <Stack.Screen 
        name='SignInWelcomeScreen'
        component={SignInWelcomeScreen}
        options={{
          headerShown: false, ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
    </Stack.Navigator>
  );
}
