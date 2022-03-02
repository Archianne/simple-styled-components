import { Meta, Story } from '@storybook/react';
import { Text } from '../../src';

const meta: Meta = {
  title: 'Font',
  component: Text,
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
  <Text fontSize="13px" color="green">
    testing
  </Text>
);
export const Default = Template.bind({});
