import React from 'react';
import {Image, Alert, View, TouchableOpacity} from 'react-native';
import {ImageInputProps} from '..';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../config';

export const ImageInput: React.FC<ImageInputProps> = ({uri, onChange}) => {
  const handleImage = () => {
    if (!uri) {
      openGalery();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'No',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => onChange(null)},
      ]);
    }
  };

  const openGalery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 200,
      cropping: true,
    })
      .then(image => {
        onChange(image.path);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleImage}>
      <View style={styles.container}>
        {uri ? (
          <Image source={{uri}} style={styles.image} />
        ) : (
          <Icon name="camera" size={40} color={colors.gray} />
        )}
      </View>
    </TouchableOpacity>
  );
};
