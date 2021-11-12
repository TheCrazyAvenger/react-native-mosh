import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CachedImage} from '@georstat/react-native-image-cache';
import {TweetItemProps} from '..';
import {Screens} from '../../config';
import {H5} from '../Typography';
import {styles} from './styles';

export const TweetItem: React.FC<TweetItemProps> = ({
  title,
  price,
  uri,
  thumbnailUrl,
}) => {
  const navigation: any = useNavigation();

  const handlePress = () => {
    navigation.navigate(Screens.tweet, {
      title,
      price,
      uri,
      thumbnailUrl,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={styles.tweetItem}>
      <CachedImage
        source={uri}
        style={{width: '100%', height: 200}}
        resizeMode="cover"
        thumbnailSource={thumbnailUrl}
      />
      <View style={styles.tweetItemInfo}>
        <H5>{title}</H5>
        <H5 style={{color: '#19F3BD', marginTop: 10}}>{price}</H5>
      </View>
    </TouchableOpacity>
  );
};
