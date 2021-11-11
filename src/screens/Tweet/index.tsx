import React from 'react';
import {Image} from 'react-native';
import {AccountPanel} from '../../components';
import {H3, H4} from '../../components/Typography';
import {colors} from '../../config';
import {Screen} from '../../ui';

export const Tweet: React.FC = () => {
  return (
    <>
      <Image
        source={{
          uri: 'file:///storage/emulated/0/Android/data/com.rnmosh/files/Pictures/20e27925-34b2-460d-901d-e33e53206be7.jpg',
        }}
        style={{width: '100%', height: 250}}
      />
      <Screen style={{backgroundColor: colors.white}}>
        <H3>Couch in great condition</H3>
        <H4 style={{color: colors.green, marginTop: 10}}>$100</H4>
        <AccountPanel style={{marginTop: 30}} />
      </Screen>
    </>
  );
};
