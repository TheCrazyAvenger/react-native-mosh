import {StyleSheet} from 'react-native';
import {colors} from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    marginTop: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    alignItems: 'center',
  },
  icon: {paddingLeft: 20},
  textInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
  },
});
