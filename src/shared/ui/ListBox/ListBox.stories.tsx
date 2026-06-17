import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '1',
    defaultValue: 'Choose value',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
    onChange: (value: string) => {},
};
