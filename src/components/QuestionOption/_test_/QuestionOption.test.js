import React from 'react';
import renderer from 'react-test-renderer';
import QuestionOption from '../index';

test('renders correctly', () => {
  const tree = renderer.create(<QuestionOption />).toJSON();
  expect(tree).toMatchSnapshot();
});
