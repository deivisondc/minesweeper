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

export const Revealed = Template.bind({});
Revealed.argTypes = {
  nearbyBombCounter: { 
    control: { type: 'range', min: 0, max: 8, step: 1 },
  },
  revealed: { 
    control: { type: 'hidden' },
  },
};
Revealed.args = {
  nearbyBombCounter: 0,
  revealed: true,
};

export const Bomb = Template.bind({});
Bomb.argTypes = {
  revealed: { 
    control: { type: 'hidden' },
  },
};
Bomb.args = {
  bomb: true,
  revealed: true,
}

export const Flagged = Template.bind({});
Flagged.argTypes = {
  revealed: { 
    control: { type: 'hidden' },
  },
};
Flagged.args = {
  flagged: true,
  revealed: false,
}

