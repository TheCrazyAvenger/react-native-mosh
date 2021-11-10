import React from 'react';
import {colors} from '../../config';
import {PostForm} from '../../forms';
import {Screen} from '../../ui';

export const Add: React.FC = () => {
  return (
    <Screen>
      <PostForm />
    </Screen>
  );
};
