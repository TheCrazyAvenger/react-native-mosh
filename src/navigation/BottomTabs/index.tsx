import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, Screens} from '../../config';
import {TweetsStack} from '../TweetsStack';
import {Account, Add} from '../../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {styles} from './styles';
import {NewTweetButton} from '../NewTweetButton';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.pink,
        tabBarStyle: {height: 70},
        tabBarLabelStyle: {marginBottom: 20},
        headerShown: false,
      }}>
      <Tab.Screen
        name={Screens.tweets}
        options={{
          title: 'Feed',
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        component={TweetsStack}
      />
      <Tab.Screen
        name={Screens.add}
        options={{
          tabBarButton: () => <NewTweetButton />,
        }}
        component={Add}
      />
      <Tab.Screen
        name={Screens.account}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Account',
          tabBarIcon: ({size, color}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};
