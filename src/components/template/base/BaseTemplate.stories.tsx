import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta = {
    title: 'templates/BaseTemplate',
    component: BaseTemplate,
    argTypes: {},
    tags: ['autodocs'],
    parameters:{
        layout: 'centered'
    }
} satisfies Meta<typeof BaseTemplate>;

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate
};
