import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {theme} from '../config';

import {BottomTabs} from './BottomTabs';

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <BottomTabs />
    </NavigationContainer>
  );
};
