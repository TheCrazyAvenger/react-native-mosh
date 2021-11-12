import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {theme} from '../config';
import {useAuth} from '../hooks';
import {AuthNavigator} from './AuthNavigator';

import {BottomTabs} from './BottomTabs';

export const AppNavigator: React.FC = () => {
  const {user}: any = useAuth();

  return (
    <NavigationContainer theme={theme}>
      {user ? <BottomTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
