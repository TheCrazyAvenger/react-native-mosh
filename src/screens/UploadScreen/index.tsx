import React from 'react';
import {Modal, View} from 'react-native';
import {UploadScreenProps} from '..';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import {colors} from '../../config';
import {styles} from './styles';

export const UploadScreen: React.FC<UploadScreenProps> = ({
  progress = 0,
  visible = false,
  onDone,
}) => {
  return (
    <Modal visible={visible} style={{flex: 1}}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.pink} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../../../assets/animations/done.json')}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};
