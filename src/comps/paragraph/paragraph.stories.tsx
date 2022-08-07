import { ComponentStory, ComponentMeta } from '@storybook/react'
import Paragraph from './index'
import { ETheme } from 'utils/types.global'

export default {
   title: 'Example/Paragraph',
   component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => (
   <Paragraph {...args} />
)

export const Default = Template.bind({})
Default.args = {
   children:
      'As a front-end developer with commercial experience with Vuejs Ive got something to say about the disadvantages of this framework.',
}

export const Primary = Template.bind({})
Primary.args = {
   theme: ETheme.PRIMARY,
   children:
      'As a front-end developer with commercial experience with Vuejs Ive got something to say about the disadvantages of this framework.',
}

export const Secondary = Template.bind({})
Secondary.args = {
   theme: ETheme.SECONDARY,
   children:
      'As a front-end developer with commercial experience with Vuejs Ive got something to say about the disadvantages of this framework.',
}
