import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  account: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 40,
    backgroundColor: colors.white,
  },
  accountInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountItem: {},
});
