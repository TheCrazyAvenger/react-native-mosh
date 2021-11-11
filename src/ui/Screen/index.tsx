import React from 'react';
import {ScrollView, View} from 'react-native';
import {ScreenTypes} from '..';
import {styles} from './styles';

export const Screen: React.FC<ScreenTypes> = ({children, style, type}) => {
  return type === 'View' ? (
    <View style={{...styles.container, ...style}}>{children}</View>
  ) : (
    <ScrollView style={{...styles.container, ...style}}>{children}</ScrollView>
  );
};
