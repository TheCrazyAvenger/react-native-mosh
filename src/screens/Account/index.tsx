import React, {useContext} from 'react';
import authStorage from '../../auth/storage';
import {AuthContext} from '../../auth/context';
import {AccountItem, AccountPanel} from '../../components';
import {colors} from '../../config';
import {Screen} from '../../ui';
import {styles} from './styles';

export const Account: React.FC = () => {
  const {user, setUser}: any = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.container}>
      <AccountPanel
        name={user.name}
        email={user.email}
        style={{marginBottom: 40}}
      />

      <AccountItem
        title="My listings"
        icon="format-list-bulleted-square"
        iconColor={colors.pink}
        onPress={() => console.log('pressed')}
        style={{borderBottomWidth: 1, borderBottomColor: colors.light}}
      />
      <AccountItem
        title="My messages"
        icon="email"
        iconColor={colors.green}
        onPress={() => console.log('pressed')}
      />
      <AccountItem
        title="Log out"
        icon="logout"
        iconColor={colors.yellow}
        onPress={handleLogout}
        style={{marginTop: 20}}
      />
    </Screen>
  );
};
