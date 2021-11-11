import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AccountPanelProps} from '..';
import {colors} from '../../config';
import {H5} from '../Typography';
import {styles} from './styles';

export const AccountPanel: React.FC<AccountPanelProps> = ({style}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{...styles.account, ...style}}>
      <View style={styles.accountInner}>
        <Avatar.Text size={70} label="IP" />
        <View style={{marginLeft: 10}}>
          <H5>Illia Pauliushchyk</H5>
          <H5 style={{color: colors.gray}}>illiapaulushchyk@gmail.com</H5>
        </View>
      </View>
      <Icon name="chevron-right" size={25} />
    </TouchableOpacity>
  );
};
