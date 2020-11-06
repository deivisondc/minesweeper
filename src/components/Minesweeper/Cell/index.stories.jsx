import { Provider } from 'react-redux';

import GlobalStyles from '../../../global';
import store from '../../../store';

import Cell from './';

// eslint-disable-next-line
export default {
  title: 'Minesweeper/Cell',
  component: Cell,
}

const Template = (args) => (
  <Provider store={store}>
    <GlobalStyles />
    <Cell cellData={{...args}} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  revealed: false,
}

export const Empty = Template.bind({});
Empty.argTypes = {
  nearbyBombCounter: { 
    control: { type: 'range', min: 0, max: 8, step: 1 },
  },
};
Empty.args = {
  nearbyBombCounter: 0,
  revealed: true,
};

export const Bomb = Template.bind({});
Bomb.args = {
  bomb: true,
  revealed: true,
}

export const Flagged = Template.bind({});
Flagged.args = {
  flagged: true,
  revealed: true,
}

