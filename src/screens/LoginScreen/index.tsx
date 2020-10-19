import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';
import { MAIN_SCREEN, LOGIN_SCREEN, APP_STACK } from 'constants/screens';
import { fetchUserInfo } from 'redux/sessionSlice';
import styles from './styles';

const LoginScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(
    () =>
      dispatch(
        fetchUserInfo('kien', {
          onSuccess: () => {
            navigation.push(APP_STACK, { screen: MAIN_SCREEN });
          },
        }),
      ),
    [dispatch],
  );

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Button testID="sign-up-button" title="login" onPress={loginRequest} />
    </View>
  );
};

LoginScreen.navigationOption = {
  title: 'Login',
};

export default memo(LoginScreen);
