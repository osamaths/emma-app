import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../js/sharedStyle';

const Btn = ({
  title,
  onPress,
  loading,
  disabled,
  style = {},
  titleStyle = {},
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      loading={loading}
      disabled={disabled}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.btnTitle,
    fontWeight: '600',
  },
});
