import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {QUESTIONS_SCREEN} from '../../../e2e/e2eIDs';
import Question from '../Question';

const Questions = ({list = [], onFillAnswer}) => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
      <View testID={QUESTIONS_SCREEN.question + 'list'}>
        {list?.map(question => (
          <Question
            key={question._id}
            question={question}
            onFillAnswer={onFillAnswer}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Questions;

const styles = StyleSheet.create({
  scroll: {flex: 1},
  list: {
    flexGrow: 1,
    paddingVertical: 30,
  },
});
