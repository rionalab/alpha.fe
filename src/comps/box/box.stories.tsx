import { ComponentStory, ComponentMeta } from '@storybook/react'

import Box from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: 'Example/Box',
   component: Box,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: 'color' },
   // },
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Shadow = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Shadow.args = {
   className: 'shadow',
   children: (
      <>
         <p>Something over the rainbow</p> <p>Something over the rainbow</p>
      </>
   ),
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//    label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//    size: 'large',
//    label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//    size: 'small',
//    label: 'Button',
// }
