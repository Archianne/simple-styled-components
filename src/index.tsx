export * from './components/Fonts/Text';
export * from './components/Fonts/Text2';
export * from './components/Button/Button1';

// step-1: create a styled component like the one above

// step-2: Create a story in the stories folder , copy from below into your stories .stories.tsx
// --------------------------------------------------------------------------------
// import { Meta, Story } from '@storybook/react';
// import { Text2 } from '../../src'; <<<<<import you component

// type Custom = {
//   fontSize: string;
//   color: string;
// };

// const meta: Meta = {
//   title: 'Font2',
//   component: Text2,  <<<<<replace the text2 with the component you are importing from above
//   argTypes: {
//     children: {
//       control: {
//         type: 'text',
//       },
//     },
//   },
// };

// export default meta;

// const Template: Story<Custom> = (custom) => <Text2 {...custom}>test</Text2>;
// export const Default = Template.bind({});
// -----------------------------------------------------------------------------------------

// step-3: load up stroy book with npm run storybook.

// step-4: when you have finished creating all your components go to package.json and change the version (basically add 1 to the last digit).

// step-5: npm login , npm publish poof done !!
