import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../config';
import {Feed, Tweet} from '../../screens';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

export const TweetsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'fade',
      }}>
      <Stack.Screen
        name={Screens.feed}
        options={{headerShown: false}}
        component={Feed}
      />
      <Stack.Screen
        name={Screens.tweet}
        options={{
          title: 'Tweet',
          headerShown: Platform.OS === 'android' ? true : false,
        }}
        component={Tweet}
      />
    </Stack.Navigator>
  );
};
