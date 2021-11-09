import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PostForm} from './forms';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <PostForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
