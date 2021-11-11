import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../../config';
import {Login, Register, Welcome} from '../../screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Screens.welcome}
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.login}
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name={Screens.register}
        component={Register}
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
};
