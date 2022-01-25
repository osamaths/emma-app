import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../js/sharedStyle';

const QuestionOption = ({option, selected, onSelect}) => {
  const isSelected = selected === option;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(option)}>
      <View style={[styles.radio, isSelected && {borderColor: colors.primary}]}>
        {isSelected ? <View style={styles.circle} /> : null}
      </View>
      <Text style={[styles.option, isSelected && styles.selected]}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

export default QuestionOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.text,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 25,
    backgroundColor: colors.primary,
  },
  option: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  selected: {
    // color: colors.primary,
  },
});
