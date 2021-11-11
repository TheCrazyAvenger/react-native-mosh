import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  account: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  accountInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
