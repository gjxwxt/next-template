import type { Meta, StoryObj } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

const meta = {
    title: 'layouts/SidebarLayout',
    component: SidebarLayout,
    argTypes: {},
} satisfies Meta<typeof SidebarLayout>;

export default meta

type Story = StoryObj<typeof SidebarLayout>;
  

export const Base: Story = {
    ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
  