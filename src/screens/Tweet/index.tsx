import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {H3, H4, H5} from '../../components/Typography';
import {colors} from '../../config';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Tweet: React.FC = () => {
  return (
    <>
      <Image
        source={{
          uri: 'file:///storage/emulated/0/Android/data/com.rnmosh/files/Pictures/20e27925-34b2-460d-901d-e33e53206be7.jpg',
        }}
        style={{width: '100%', height: 250}}
      />
      <Screen style={{backgroundColor: colors.white}}>
        <H3>Couch in great condition</H3>
        <H4 style={{color: '#19F3BD', marginTop: 10}}>$100</H4>
        <TouchableOpacity activeOpacity={0.7} style={styles.account}>
          <View style={styles.accountInner}>
            <Avatar.Text size={70} label="IP" />
            <View style={{marginLeft: 10}}>
              <H5>Illia Pauliushchyk</H5>
              <H5 style={{color: colors.gray}}>5 Listings</H5>
            </View>
          </View>
          <Icon name="chevron-right" size={25} />
        </TouchableOpacity>
      </Screen>
    </>
  );
};
