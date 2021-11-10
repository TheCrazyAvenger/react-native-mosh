import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../../config';
import {Login, Register, Welcome} from '../../screens';

const Stack = createNativeStackNavigator();

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.welcome} component={Welcome} />
      <Stack.Screen name={Screens.login} component={Login} />
      <Stack.Screen name={Screens.register} component={Register} />
    </Stack.Navigator>
  );
};
