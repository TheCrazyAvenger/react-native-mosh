import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.light,
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
