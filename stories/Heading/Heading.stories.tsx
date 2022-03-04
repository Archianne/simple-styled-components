import { Heading } from '../../src';
import { Meta, Story } from '@storybook/react';

type Custom = {
  fontSize: string;
  color: string;
};

const meta: Meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<Custom> = (custom) => <Heading {...custom}>This is a heading</Heading>;
export const Default = Template.bind({});
