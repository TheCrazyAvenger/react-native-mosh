import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, Screens} from '../../config';
import {styles} from './styles';

export const NewTweetButton: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(Screens.add)}>
      <View style={styles.container}>
        <Icon name="plus-circle" size={40} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};
