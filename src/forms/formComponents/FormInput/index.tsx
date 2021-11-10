import React from 'react';
import {TextInput} from 'react-native';
import {FormInputProps} from '../..';
import {colors} from '../../../config';
import {styles} from './styles';

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  style,
  onChange,
  onBlur,
}) => {
  return (
    <TextInput
      placeholderTextColor={colors.gray}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      style={{...styles.textInput, ...style}}
    />
  );
};
