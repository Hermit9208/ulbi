import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

const authData = {
    id: '1',
    username: 'test-user',
    avatar: 'https://avatars.githubusercontent.com/u/9919?v=4',
};

export const User = Template.bind({});
User.args = {};
User.decorators = [
    StoreDecorator({
        user: {
            authData: {
                ...authData,
                roles: [UserRole.USER],
            },
        },
    }),
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                ...authData,
                roles: [UserRole.ADMIN],
            },
        },
    }),
];

export const Manager = Template.bind({});
Manager.args = {};
Manager.decorators = [
    StoreDecorator({
        user: {
            authData: {
                ...authData,
                roles: [UserRole.MANAGER],
            },
        },
    }),
];

export const Unauthorized = Template.bind({});
Unauthorized.args = {};
Unauthorized.decorators = [
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];
