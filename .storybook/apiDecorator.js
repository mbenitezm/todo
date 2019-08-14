import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import mocks from '../mocks/api';

function apiDecorator(storyFn) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {storyFn()}
    </MockedProvider>
  );
}

export default apiDecorator;
