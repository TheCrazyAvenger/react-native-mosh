import {Formik} from 'formik';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import {
  ErrorMessage,
  FormImagePicker,
  FormInput,
  FormPicker,
  postSchema,
} from '..';
import listingsApi from '../../api/tweets';
import {colors} from '../../config';
import {useGeolocation} from '../../hooks';
import {UploadScreen} from '../../screens';
import {TextButton} from '../../ui';

export const PostForm: React.FC = () => {
  const location = useGeolocation();
  const [uloadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing: any, {resetForm}: {resetForm: any}) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      {...listing, location},
      (progress: any) => setProgress(progress),
    );

    if (!result.ok) {
      setUploadVisible(false);
      return Alert.alert('Could not save the listing.');
    }
    resetForm();
  };

  return (
    <>
      <UploadScreen
        visible={uloadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <Formik
        validationSchema={postSchema}
        initialValues={{
          title: '',
          price: '',
          description: '',
          images: [],
          category: '',
        }}
        onSubmit={handleSubmit}>
        {({
          handleSubmit,
          setFieldTouched,
          setFieldValue,
          handleChange,
          errors,
          touched,
          values,
        }) => {
          return (
            <>
              <FormImagePicker name="images" />
              <ErrorMessage
                isTouched={touched.images}
                errorMessage={errors.images}
              />

              <FormInput
                placeholder="Title"
                onChange={handleChange('title')}
                onBlur={() => setFieldTouched('title')}
                value={values.title}
              />
              <ErrorMessage
                isTouched={touched.title}
                errorMessage={errors.title}
              />

              <FormInput
                placeholder="Price"
                onChange={handleChange('price')}
                onBlur={() => setFieldTouched('price')}
                value={values.price}
                style={{maxWidth: '35%'}}
              />
              <ErrorMessage
                isTouched={touched.price}
                errorMessage={errors.price}
              />

              <FormPicker
                setCategoryValue={(value: string) =>
                  setFieldValue('category', value)
                }
                value={values.category}
              />
              <ErrorMessage
                isTouched={touched.category}
                errorMessage={errors.category}
              />

              <FormInput
                placeholder="Description"
                onChange={handleChange('description')}
                onBlur={() => setFieldTouched('description')}
                value={values.description}
              />
              <ErrorMessage
                isTouched={touched.description}
                errorMessage={errors.description}
              />

              <TextButton
                title="Post"
                color={colors.pink}
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};
