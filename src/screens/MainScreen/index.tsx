import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserName, logout } from 'redux/sessionSlice';
import { MAIN_SCREEN } from 'constants/screens';
// import strings from 'locale';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      {userName && (
        <>
          <Text>Hey{` ${userName}` || ''}, you&#39;re logged in!</Text>
          <Button
            testID="logout-button"
            onPress={logoutRequest}
            title="logout"
            // title={strings.MAIN_SCREEN.logout}
          />
        </>
      )}
    </View>
  );
};

// MainScreen.navigationOptions = {
//   title: strings.MAIN_SCREEN.title,
// };

export default MainScreen;
