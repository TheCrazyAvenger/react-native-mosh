import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {H2} from '../../components/Typography';
import {colors, Screens} from '../../config';
import {Screen, TextButton} from '../../ui';
import {styles} from './styles';

export const Welcome: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <Screen type="View" style={{padding: 0}}>
      <ImageBackground
        blurRadius={10}
        source={require('../../../assets/images/background.jpg')}
        style={styles.background}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo-red.png')}
            style={styles.logo}
          />
          <H2>Sell What You Don't Need</H2>
        </View>
        <View style={styles.buttons}>
          <TextButton
            title="Login"
            color={colors.pink}
            onPress={() => navigation.navigate(Screens.login)}
          />
          <TextButton
            title="Register"
            color={colors.green}
            onPress={() => navigation.navigate(Screens.register)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};
