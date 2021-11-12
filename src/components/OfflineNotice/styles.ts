import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    height: 50,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
});
