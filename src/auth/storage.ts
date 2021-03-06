import jwtDecode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'authToken';

const storeToken = async (authToken: string) => {
  try {
    await EncryptedStorage.setItem(key, authToken);
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const token = await EncryptedStorage.getItem(key);
    return token;
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
};
