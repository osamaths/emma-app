import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Welcome = ({}) => {
  const navigation = useNavigation();

  const onStartQuiz = () => navigation.dispatch(StackActions.push('questions'));

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Emma Quiz App.</Text>

      <View style={styles.content}>
        <TouchableOpacity style={styles.btn} onPress={onStartQuiz}>
          <Text style={styles.btnTitle}>Start Quiz</Text>
        </TouchableOpacity>
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
  btn: {
    backgroundColor: '#80deea',
    borderRadius: 8,
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#102027',
    fontWeight: '600',
  },
});
