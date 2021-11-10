import {DefaultTheme} from '@react-navigation/native';
import {colors} from './colors';

export const theme: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: colors.pink,
  },
};
