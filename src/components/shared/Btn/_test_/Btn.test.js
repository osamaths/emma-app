import React from 'react';
import renderer from 'react-test-renderer';
import Btn from '../index';

test('renders correctly', () => {
  const tree = renderer.create(<Btn />).toJSON();
  expect(tree).toMatchSnapshot();
});
