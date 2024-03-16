import { Meta, StoryObj } from '@storybook/react';
import PageTransition, { IPageTransition } from './PageTransition';
import { mockIPageTransitionProps } from './PageTransition.mocks';

const meta = {
    title: 'layouts/pagetransition',
    component: PageTransition,
    argTypes: {},
} satisfies Meta<typeof PageTransition>;
  
export default meta;

type Story = StoryObj<typeof PageTransition>;
  
export const Base: Story = {
    args: {
        ...mockIPageTransitionProps.base,
    } as IPageTransition
};
  