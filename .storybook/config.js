import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styleDecorator from './styleDecorator';
import routerDecorator from './routerDecorator';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

addDecorator(styleDecorator);
addDecorator(routerDecorator);
addDecorator(withKnobs);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
