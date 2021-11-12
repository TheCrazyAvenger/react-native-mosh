import {CachedImage} from '@georstat/react-native-image-cache';
import {useRoute} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Image} from 'react-native';
import {AuthContext} from '../../auth/context';
import {AccountPanel} from '../../components';
import {H3, H4} from '../../components/Typography';
import {colors} from '../../config';
import {Screen} from '../../ui';

export const Tweet: React.FC = () => {
  const route: any = useRoute();
  const {title, price, thumbnailUrl, uri} = route.params;

  const {user}: any = useContext(AuthContext);

  return (
    <>
      <CachedImage
        source={uri}
        style={{width: '100%', height: 250}}
        resizeMode="cover"
        thumbnailSource={thumbnailUrl}
      />
      <Screen style={{backgroundColor: colors.white}}>
        <H3>{title}</H3>
        <H4 style={{color: colors.green, marginTop: 10}}>{price}</H4>
        <AccountPanel
          name={user.name}
          email={user.email}
          style={{marginTop: 30}}
        />
      </Screen>
    </>
  );
};
