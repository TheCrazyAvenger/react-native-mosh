import {Formik} from 'formik';
import React from 'react';
import {Text} from 'react-native';
import {FormImagePicker, postSchema} from '..';

export const PostForm: React.FC = () => {
  return (
    <Formik
      validationSchema={postSchema}
      initialValues={{images: []}}
      onSubmit={values => console.log(values)}>
      {({errors, touched, values}) => {
        return (
          <>
            <FormImagePicker name="images" />
            {errors.images && touched.images && (
              <Text
                style={{
                  position: 'absolute',
                  top: 55,
                  fontSize: 12,
                  color: '#FF0D10',
                }}>
                {errors.images}
              </Text>
            )}
          </>
        );
      }}
    </Formik>
  );
};
