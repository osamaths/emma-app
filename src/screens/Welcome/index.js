import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Btn from '../../components/shared/Btn';

const Welcome = ({}) => {
  const navigation = useNavigation();

  const onStartQuiz = () => navigation.dispatch(StackActions.push('questions'));

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Emma Quiz App.</Text>

      <View style={styles.content}>
        <Btn onPress={onStartQuiz} title="Start Quiz" />
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
