import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import {useAuth} from '../contexts/AuthContext';

const Stack = createStackNavigator();

export default function Routes() {
  const {isSignedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
