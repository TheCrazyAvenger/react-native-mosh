import {StyleSheet} from 'react-native';
import {colors} from '../../../config';

export const styles = StyleSheet.create({
  formPicker: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '50%',
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    height: 60,
    borderRadius: 50,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modalItem: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    maxWidth: '90%',
    textAlign: 'center',
    marginTop: 5,
  },
});
