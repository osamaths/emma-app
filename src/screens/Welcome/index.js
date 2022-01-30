import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WELCOME_SCREEN} from '../../../e2e/e2eIDs';
import Btn from '../../components/shared/Btn';

const Welcome = ({}) => {
  const navigation = useNavigation();

  const onStartQuiz = () => navigation.dispatch(StackActions.push('questions'));

  return (
    <View style={styles.container}>
      <Text style={styles.welcome} testID={WELCOME_SCREEN.welcome_text}>
        Welcome to Emma Quiz App.
      </Text>

      <View style={styles.content}>
        <Btn
          onPress={onStartQuiz}
          title="Start Quiz"
          testID={WELCOME_SCREEN.btn}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
