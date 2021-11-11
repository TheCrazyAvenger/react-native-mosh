import {Formik} from 'formik';
import React from 'react';
import {ErrorMessage, FormInput, registerSchema} from '..';
import {colors} from '../../config';
import {TextButton} from '../../ui';

export const RegisterForm: React.FC = () => {
  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={{
        name: '',
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
              placeholder="Name"
              onChange={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              value={values.name}
              icon="account"
            />
            <ErrorMessage isTouched={touched.name} errorMessage={errors.name} />

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
              title="Register"
              color={colors.pink}
              onPress={handleSubmit}
            />
          </>
        );
      }}
    </Formik>
  );
};
