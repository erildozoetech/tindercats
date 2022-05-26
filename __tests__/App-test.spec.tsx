import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';
import { getCatsList, postCatVote } from '../src/containers/home/services/index.services';

jest.mock('../src/containers/home/services/index.services');

describe('Testing the layout render', () => {
  it('should render all application', () => {
    render(<App />);
  });
});

describe('Testing the two services at first render', () => {

  it('should get the cats list', () => {
    expect(getCatsList).toBeCalledTimes(1);
  });


  it('should not post a vote on any cat at the first render', () => {
    expect(postCatVote).toBeCalledTimes(0);
  });

});