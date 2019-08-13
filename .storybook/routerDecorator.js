import React from 'react';
import { RouterContext } from 'next-server/dist/lib/router-context';

const router = {
  pathname: '/invoices',
  route: '/invoices',
  query: {},
  asPath: '/invoices',
};

function apiDecorator(storyFn) {
  return <RouterContext.Provider value={router}>{storyFn()}</RouterContext.Provider>;
}

export default apiDecorator;
