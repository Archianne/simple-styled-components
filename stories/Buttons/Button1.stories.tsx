import { Meta, Story } from '@storybook/react';
import { Button1, Text } from '../../src';

const meta: Meta = {
  title: 'Button1',
  component: Button1,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story = (custom) => (
  <Button1 fontSize="13px" color="green">
    testing
  </Button1>
);
export const Default = Template.bind({});
