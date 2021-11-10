import React from 'react';
import {ScrollView} from 'react-native';
import {ScreenTypes} from '..';
import {styles} from './styles';

export const Screen: React.FC<ScreenTypes> = ({children, style}) => {
  return (
    <ScrollView style={{...styles.container, ...style}}>{children}</ScrollView>
  );
};
