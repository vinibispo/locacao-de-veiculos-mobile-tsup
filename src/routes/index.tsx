import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import {useAuth} from '../contexts/AuthContext';
import {Brand} from '../pages/Brand';

const Stack = createStackNavigator();

export default function Routes() {
  const {isSignedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Brand" component={Brand} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
