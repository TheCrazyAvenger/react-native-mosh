import {Formik} from 'formik';
import React from 'react';
import {ErrorMessage, FormInput, loginSchema} from '..';
import {colors} from '../../config';
import {TextButton} from '../../ui';

export const LoginForm: React.FC = () => {
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}>
      {({
        handleSubmit,
        setFieldTouched,
        handleChange,
        errors,
        touched,
        values,
      }) => {
        return (
          <>
            <FormInput
              placeholder="Email"
              onChange={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
              icon="email"
            />
            <ErrorMessage
              isTouched={touched.email}
              errorMessage={errors.email}
            />

            <FormInput
              placeholder="Password"
              onChange={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              value={values.password}
              icon="lock"
            />
            <ErrorMessage
              isTouched={touched.password}
              errorMessage={errors.password}
            />

            <TextButton
              title="Login"
              color={colors.pink}
              onPress={handleSubmit}
            />
          </>
        );
      }}
    </Formik>
  );
};
