import React from 'react';
import {TweetItem} from '../../components';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Feed: React.FC = () => {
  return (
    <Screen>
      <TweetItem />
      <TweetItem />
    </Screen>
  );
};
