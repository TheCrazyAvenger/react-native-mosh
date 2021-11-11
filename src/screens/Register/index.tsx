import React from 'react';
import {Text} from 'react-native';
import {RegisterForm} from '../../forms';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Register: React.FC = () => {
  return (
    <Screen>
      <RegisterForm />
    </Screen>
  );
};
