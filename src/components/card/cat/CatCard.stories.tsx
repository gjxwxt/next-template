import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

const meta = {
    title: 'cart/CatCard',
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
    ...mockCatCardProps.base,
  } as ICatCard
};
