import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {H4Type} from '..';
import {styles} from './styles';

export const H4: React.FC<H4Type> = ({children, style}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};
