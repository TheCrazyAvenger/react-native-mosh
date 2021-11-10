import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../config';
import {Feed, Tweet} from '../../screens';

const Stack = createNativeStackNavigator();

export const TweetsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.feed}
        options={{headerShown: false}}
        component={Feed}
      />
      <Stack.Screen
        name={Screens.tweet}
        options={{
          title: 'Tweet',
        }}
        component={Tweet}
      />
    </Stack.Navigator>
  );
};
