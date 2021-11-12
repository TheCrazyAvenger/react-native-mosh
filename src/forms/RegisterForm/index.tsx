import {Formik} from 'formik';
import React, {useState} from 'react';
import {ErrorMessage, FormInput, registerSchema} from '..';
import {colors} from '../../config';
import {Screen, TextButton} from '../../ui';
import userApi from '../../api/users';
import authApi from '../../api/auth';
import {useApi, useAuth} from '../../hooks';
import {ActivityIndicator} from '../../components';

export const RegisterForm: React.FC = () => {
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);
  const {logIn} = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (userInfo: any) => {
    const result: any = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred');
      }
      return;
    }
    setError(null);

    const {data: authToken}: any = await loginApi.request(
      userInfo.email,
      userInfo.password,
    );

    logIn(authToken);
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={{
        name: '',
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
            <ErrorMessage errorMessage={error} isTouched={registerApi.error} />
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
            <ActivityIndicator
              visible={registerApi.loading || loginApi.loading}
            />
          </Screen>
        );
      }}
    </Formik>
  );
};
