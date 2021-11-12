import {Formik} from 'formik';
import React, {useState} from 'react';
import authApi from '../../api/auth';
import {ErrorMessage, FormInput, loginSchema} from '..';
import {colors} from '../../config';
import {Screen, TextButton} from '../../ui';

import {useApi, useAuth} from '../../hooks';
import {ActivityIndicator} from '../../components';

export const LoginForm: React.FC = () => {
  const loginApi = useApi(authApi.login);
  const {logIn}: any = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result: any = await loginApi.request(email, password);
    if (!result.ok) {
      setError('Invalid email and/or password');
      return;
    }

    setError(null);
    logIn(result.data);
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}>
      {({
        handleSubmit,
        setFieldTouched,
        handleChange,
        errors,
        touched,
        values,
      }) => {
        return (
          <Screen style={{padding: 0}}>
            <ErrorMessage errorMessage={error} isTouched={loginApi.error} />
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
            <ActivityIndicator visible={loginApi.loading} />
          </Screen>
        );
      }}
    </Formik>
  );
};
