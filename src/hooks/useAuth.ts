import jwtDecode from 'jwt-decode';
import {useContext} from 'react';
import {AuthContext} from '../auth/context';
import authStorage from '../auth/storage';

export const useAuth = () => {
  const {user, setUser} = useContext<any>(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (authToken: string) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return {user, logOut, logIn, setUser};
};
