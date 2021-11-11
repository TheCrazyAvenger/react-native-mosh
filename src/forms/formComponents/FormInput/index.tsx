import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FormInputProps} from '../..';
import {colors} from '../../../config';
import {styles} from './styles';

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  style,
  onChange,
  onBlur,
  icon,
}) => {
  return (
    <View style={styles.container}>
      {icon ? <Icon name={icon} size={20} style={styles.icon} /> : null}
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={{...styles.textInput, ...style, paddingLeft: icon ? 12 : 20}}
      />
    </View>
  );
};
