import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Question from '../../components/Question';
import Btn from '../../components/shared/Btn';

const Questions = ({}) => {
  const [list, setList] = useState([]);
  const [answers, setAnswers] = useState({});

  const onFillAnswer = (obj = {}) => {
    setAnswers({...answers, ...obj});
  };

  const fetchQuestions = () => {
    const questions = [
      {
        question: 'What is your name?',
        type: 'free',
      },
      {
        question: 'What is your gender?',
        options: ['Male', 'Female'],
        type: 'options',
      },
      {
        question: 'How old are you?',
        type: 'free',
      },
    ];

    setList(questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
        {list.map(question => (
          <Question
            key={question.question}
            question={question}
            onFillAnswer={onFillAnswer}
          />
        ))}
      </ScrollView>
      <View style={styles.submitContainer}>
        <Btn title="Submit Answers" />
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scroll: {flex: 1},
  list: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  submitContainer: {
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
});
