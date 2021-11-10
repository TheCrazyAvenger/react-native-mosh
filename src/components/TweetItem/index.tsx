import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Screens} from '../../config';
import {H5} from '../Typography';
import {styles} from './styles';

export const TweetItem: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(Screens.tweet)}
      style={styles.tweetItem}>
      <Image
        source={{
          uri: 'file:///storage/emulated/0/Android/data/com.rnmosh/files/Pictures/20e27925-34b2-460d-901d-e33e53206be7.jpg',
        }}
        style={{width: '100%', height: 200}}
      />
      <View style={styles.tweetItemInfo}>
        <H5>Couch in great condition</H5>
        <H5 style={{color: '#19F3BD', marginTop: 10}}>$100</H5>
      </View>
    </TouchableOpacity>
  );
};
