import React from 'react';
import {Image, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginForm} from '../../forms';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Login: React.FC = () => {
  return (
    <Screen>
      <Image
        source={require('../../../assets/images/logo-red.png')}
        style={styles.logo}
      />
      <LoginForm />
    </Screen>
  );
};
