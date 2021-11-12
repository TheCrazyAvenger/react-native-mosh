import React, {useEffect, useState} from 'react';
import authStorage from './auth/storage';
import {AppNavigator} from './navigation/AppNavigator';
import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs} from 'react-native-file-access';
import {AuthContext} from './auth/context';
import SplashScreen from 'react-native-splash-screen';

export const App: React.FC = () => {
  const [user, setUser] = useState();

  CacheManager.config = {
    baseDir: `${Dirs.CacheDir}/images_cache/`,
    blurRadius: 15,
    sourceAnimationDuration: 1000,
    thumbnailAnimationDuration: 1000,
  };

  const restoreUser = async () => {
    const user: any = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
    SplashScreen.hide();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <AppNavigator />
    </AuthContext.Provider>
  );
};
