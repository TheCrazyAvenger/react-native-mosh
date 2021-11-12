import {Formik} from 'formik';
import React, {useContext, useState} from 'react';
import authApi from '../../api/auth';
import authStorage from '../../auth/storage';
import {ErrorMessage, FormInput, loginSchema} from '..';
import {colors} from '../../config';
import {TextButton} from '../../ui';
import jwtDecode from 'jwt-decode';
import {AuthContext} from '../../auth/context';
import EncryptedStorage from 'react-native-encrypted-storage';

export const LoginForm: React.FC = () => {
  const authContext: any = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result: any = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
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
          <>
            <ErrorMessage
              errorMessage="Invalid email and/or password"
              isTouched={loginFailed}
            />
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
