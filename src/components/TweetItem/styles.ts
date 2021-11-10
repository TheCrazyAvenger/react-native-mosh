import {StyleSheet} from 'react-native';
import {colors} from '../../config';

export const styles = StyleSheet.create({
  tweetItem: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 15,
  },
  tweetItemInfo: {
    padding: 15,
  },
});
