import { Provider } from 'react-redux';

import GlobalStyles from '../../global';
import store from '../../store';

import Minesweeper from './';

// eslint-disable-next-line
export default {
  title: 'Minesweeper/Minesweeper',
  component: Minesweeper,
};

const Template = (args) => (
  <Provider store={store}>
    <GlobalStyles />
    <Minesweeper {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.argTypes = {
  rows: { 
    control: { type: 'range', min: 1, max: 10, step: 1 },
  },
  columns: { 
    control: { type: 'range', min: 1, max: 10, step: 1 },
  },
  mineCount: { 
    control: { type: 'range', min: 1, max: 100, step: 1 },
  },
};
Default.args = {
  rows: 3,
  columns: 5,
  mineCount: 5,
};