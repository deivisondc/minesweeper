import Cell from './';

// eslint-disable-next-line
export default {
  title: 'Minesweeper/Cell',
  component: Cell,
}

const Template = (args) => <Cell {...args} />

export const Default = Template.bind({});
Default.args = {
  revealed: false,
}

export const Empty = Template.bind({});
Empty.argTypes = {
  number: { 
    control: { type: 'range', min: 0, max: 8, step: 1 },
  },
};
Empty.args = {
  number: 0,
  revealed: true
};

export const Bomb = Template.bind({});
Bomb.args = {
  isBomb: true,
  revealed: true
}

