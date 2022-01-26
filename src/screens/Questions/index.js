import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Question from '../../components/Question';
import Btn from '../../components/shared/Btn';
import {GET_REQUEST, POST_REQUEST} from '../../js/requests';
import {colors} from '../../js/sharedStyle';

const Questions = ({}) => {
  const [list, setList] = useState([]);
  const [answers, setAnswers] = useState({});
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation();

  const onFillAnswer = (obj = {}) => {
    setAnswers({...answers, ...obj});
  };

  const fetchQuestions = () => {
    GET_REQUEST('/questions', questions => {
      setFetching(false);
      setList(questions);
    });
  };

  const submit = async () => {
    setSubmitting(true);
    const res = await POST_REQUEST('/answers', {answers});
    if (res.status === 200) {
      setSubmitting(false);
      showMessage({
        duration: 4000,
        floating: true,
        message: 'Answer Submitted',
        description: 'Your answers have been submitted!',
        type: 'success',
      });
      navigation.goBack();
    }
  };
  const onSubmit = () => {
    const valid = list.every(q => answers[q._id]);
    valid && submit();
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      {fetching && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={colors.primary}
        />
      )}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.list}>
        {list?.map(question => (
          <Question
            key={question.question}
            question={question}
            onFillAnswer={onFillAnswer}
          />
        ))}
      </ScrollView>
      <View style={styles.submitContainer}>
        <Btn title="Submit Answers" onPress={onSubmit} loading={submitting} />
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
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  submitContainer: {
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
});
