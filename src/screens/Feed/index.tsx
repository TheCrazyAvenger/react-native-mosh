import React, {useEffect, useState} from 'react';
import listingsApi from '../../api/tweets';
import {FlatList} from 'react-native';
import {TweetItem, ActivityIndicator, OfflineNotice} from '../../components';
import {Screen, TextButton} from '../../ui';
import {styles} from './styles';
import {H3} from '../../components/Typography';
import {colors} from '../../config';
import {useApi} from '../../hooks';

export const Feed: React.FC = () => {
  const {
    data: tweets,
    error,
    loading,
    request: loadTweets,
  } = useApi(listingsApi.getTweets);

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <>
      <OfflineNotice />
      <Screen type="View" style={styles.container}>
        {error && (
          <>
            <H3>Couldn't retrieve the listing.</H3>
            <TextButton title="Retry" color={colors.red} onPress={loadTweets} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList
          data={tweets}
          keyExtractor={(listing: any) => listing.id.toString()}
          renderItem={({item}) => (
            <TweetItem
              title={item.title}
              price={`$ ${item.price}`}
              uri={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    </>
  );
};
