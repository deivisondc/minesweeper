import Minesweeper from './';

// eslint-disable-next-line
export default {
  title: 'Minesweeper/Minesweeper',
  component: Minesweeper,
};

const Template = (args) => <Minesweeper {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: 3,
  columns: 5,
  mineCount: 5,
};