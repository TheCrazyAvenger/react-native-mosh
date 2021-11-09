import React from 'react';
import {ScrollView, View} from 'react-native';
import {ImageInput, ImageInputListProps} from '..';

export const ImageInputList: React.FC<ImageInputListProps> = ({
  uris,
  onAdd,
  onRemove,
}) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {uris.map(uri => (
          <View key={uri} style={{marginRight: 15}}>
            <ImageInput uri={uri} onChange={() => onRemove(uri)} />
          </View>
        ))}
        <ImageInput onChange={(uri: string) => onAdd(uri)} />
      </ScrollView>
    </View>
  );
};
