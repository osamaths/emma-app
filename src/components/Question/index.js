import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import QuestionOption from '../QuestionOption';

const Question = ({question: obj = {}, onFillAnswer}) => {
  const {question, options = [], type} = obj;
  const [selected, setSelected] = useState('');

  const isOptions = type === 'options' && options.length > 0;

  const onSelectAnswer = answer => {
    setSelected(answer);
    onFillAnswer({[question]: answer});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {isOptions && (
        <View style={styles.options}>
          {options.map(option => (
            <QuestionOption
              key={option}
              option={option}
              selected={selected}
              onSelect={onSelectAnswer}
            />
          ))}
        </View>
      )}
      {!isOptions && (
        <TextInput
          style={styles.input}
          onChangeText={onSelectAnswer}
          placeholder="Write your answer"
        />
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    marginTop: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
});
