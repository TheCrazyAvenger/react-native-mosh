import React from 'react';
import {Button} from 'react-native-paper';
import {TextButtonProps} from '..';
import {styles} from './styles';

export const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  color,
}) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      contentStyle={{height: 50, backgroundColor: color}}
      labelStyle={styles.submitLabel}
      style={styles.submitButton}>
      {title}
    </Button>
  );
};
