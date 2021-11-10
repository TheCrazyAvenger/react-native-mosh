import React, {useState} from 'react';
import {Text, Modal, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FormPickerProps} from '../..';
import {H5} from '../../../components/Typography';
import {colors} from '../../../config';
import {styles} from './styles';

export const FormPicker: React.FC<FormPickerProps> = ({setCategoryValue}) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState('Category');

  const categories = [
    {name: 'Furniture', icon: 'floor-lamp', color: '#FD525B'},
    {name: 'Cars', icon: 'car', color: '#FD8B3A'},
    {name: 'Cameras', icon: 'camera', color: '#FECD29'},
    {name: 'Games', icon: 'cards', color: '#21DA76'},
    {name: 'Clothing', icon: 'hanger', color: '#25C4B2'},
    {name: 'Sports', icon: 'basketball', color: '#3CA0EF'},
    {name: 'Movies & Music', icon: 'music-note', color: '#436FE9'},
    {name: 'Books', icon: 'book', color: '#9D53E8'},
    {name: 'Other', icon: 'window-maximize', color: '#6C8099'},
  ];

  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <Button
          uppercase={false}
          labelStyle={{color: '#3CA0EF', fontSize: 16}}
          onPress={() => setVisible(false)}>
          Close
        </Button>
        <View style={styles.categories}>
          {categories.map(item => {
            return (
              <TouchableOpacity
                key={item.name}
                style={{alignItems: 'center', margin: 15}}
                activeOpacity={0.7}
                onPress={() => {
                  setCategoryValue(item.name);
                  setVisible(false);
                  setCategory(item.name);
                }}>
                <View
                  style={{
                    ...styles.modalItem,
                    backgroundColor: item.color,
                  }}>
                  <Icon name={item.icon} size={40} color={colors.white} />
                </View>
                <H5 style={styles.modalText}>{item.name}</H5>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setVisible(true)}
        style={styles.formPicker}>
        <Text
          style={{color: category !== 'Category' ? colors.black : colors.gray}}>
          {category}
        </Text>
        <Icon name="chevron-down" size={18} />
      </TouchableOpacity>
    </>
  );
};
