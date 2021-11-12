import {useNetInfo} from '@react-native-community/netinfo';
import React from 'react';
import {View} from 'react-native';
import {colors} from '../../config';
import {H4} from '../Typography';
import {styles} from './styles';

export const OfflineNotice: React.FC = () => {
  const netInfo = useNetInfo();

  if (netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <H4 style={{color: colors.white}}>No internet connection</H4>
      </View>
    );

  return null;
};
