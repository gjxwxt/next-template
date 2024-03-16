import { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

const meta = {
    title: 'layouts/PrimaryLayout',
    component: PrimaryLayout,
    argTypes: {},
} satisfies Meta<typeof PrimaryLayout>;

export default meta

type Story = StoryObj<typeof PrimaryLayout>
  

export const Base: Story = {
    args: {
        ...mockPrimaryLayoutProps.base,
    } as IPrimaryLayout
};

  