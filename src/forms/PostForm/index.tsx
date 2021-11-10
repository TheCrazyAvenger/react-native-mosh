import {Formik} from 'formik';
import React from 'react';
import {Button} from 'react-native-paper';
import {
  ErrorMessage,
  FormImagePicker,
  FormInput,
  FormPicker,
  postSchema,
} from '..';
import {colors} from '../../config';
import {useGeolocation} from '../../hooks';
import {styles} from './styles';

export const PostForm: React.FC = () => {
  const location = useGeolocation();

  return (
    <Formik
      validationSchema={postSchema}
      initialValues={{
        title: '',
        price: '',
        description: '',
        images: [],
        category: '',
      }}
      onSubmit={values => console.log(values, location)}>
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

            <Button
              mode="contained"
              onPress={handleSubmit}
              contentStyle={{height: 50, backgroundColor: colors.pink}}
              labelStyle={styles.submitLabel}
              style={styles.submitButton}>
              Post
            </Button>
          </>
        );
      }}
    </Formik>
  );
};
