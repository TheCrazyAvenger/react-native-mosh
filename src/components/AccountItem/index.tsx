import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountItemProps} from '..';
import {colors} from '../../config';
import {H5} from '../Typography';
import {styles} from './styles';

export const AccountItem: React.FC<AccountItemProps> = ({
  style,
  title,
  icon,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{...styles.account, ...style}}>
      <View style={styles.accountInner}>
        <View style={{...styles.accountIcon, backgroundColor: iconColor}}>
          <Icon name={icon} size={22} color={colors.white} />
        </View>
        <View style={{marginLeft: 10}}>
          <H5>{title}</H5>
        </View>
      </View>
      <Icon name="chevron-right" size={25} />
    </TouchableOpacity>
  );
};
