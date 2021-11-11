import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {TweetItemProps} from '..';
import {Screens} from '../../config';
import {H5} from '../Typography';
import {styles} from './styles';

export const TweetItem: React.FC<TweetItemProps> = ({title, price, uri}) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(Screens.tweet)}
      style={styles.tweetItem}>
      <Image
        source={{
          uri,
        }}
        style={{width: '100%', height: 200}}
      />
      <View style={styles.tweetItemInfo}>
        <H5>{title}</H5>
        <H5 style={{color: '#19F3BD', marginTop: 10}}>{price}</H5>
      </View>
    </TouchableOpacity>
  );
};
