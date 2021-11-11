import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    borderColor: colors.white,
    borderWidth: 10,
    height: 80,
    width: 80,
    bottom: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
