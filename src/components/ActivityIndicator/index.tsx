import React from 'react';
import {ActivityIndicatorProps} from '..';
import LottieView from 'lottie-react-native';

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../../assets/animations/loading.json')}
    />
  );
};
