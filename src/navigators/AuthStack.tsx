import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LOGIN_SCREEN } from 'constants/screens';

import LoginScreen from 'screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthStack;
