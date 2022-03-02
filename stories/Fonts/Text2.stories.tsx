import { Meta, Story } from '@storybook/react';
import { Text2 } from '../../src';

type Custom = {
  fontSize: string;
  color: string;
};

const meta: Meta = {
  title: 'Font2',
  component: Text2,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<Custom> = (custom) => <Text2 {...custom}>test</Text2>;
export const Default = Template.bind({});
