import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {AuthContext} from '../auth/context';
import {theme} from '../config';
import {AuthNavigator} from './AuthNavigator';

import {BottomTabs} from './BottomTabs';

export const AppNavigator: React.FC = () => {
  const {user}: any = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme}>
      {user ? <BottomTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
