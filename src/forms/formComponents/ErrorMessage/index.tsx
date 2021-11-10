import React from 'react';
import {Text} from 'react-native';
import {ErrorMessageProps} from '../..';
import {colors} from '../../../config';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage,
  isTouched,
}) => {
  return errorMessage && isTouched ? (
    <Text
      style={{
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        marginTop: 5,
        color: colors.red,
      }}>
      {errorMessage}
    </Text>
  ) : null;
};
