import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {H5} from '../../components/Typography';
import {colors} from '../../config';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Account: React.FC = () => {
  return (
    <Screen style={{paddingHorizontal: 0}}>
      <TouchableOpacity activeOpacity={0.7} style={styles.account}>
        <View style={styles.accountInner}>
          <Avatar.Text size={70} label="IP" />
          <View style={{marginLeft: 10}}>
            <H5>Illia Pauliushchyk</H5>
            <H5 style={{color: colors.gray}}>illiapaulushchyk@gmail.com</H5>
          </View>
        </View>
        <Icon name="chevron-right" size={25} />
      </TouchableOpacity>
    </Screen>
  );
};
