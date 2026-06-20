import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'Choose value',
    defaultValue: 'Choose value',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
    onChange: (value: string) => {},
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'Choose value',
    defaultValue: 'Choose value',
    direction: 'top left',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
    onChange: (value: string) => {},
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'Choose value',
    defaultValue: 'Choose value',
    direction: 'top right',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
    onChange: (value: string) => {},
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'Choose value',
    defaultValue: 'Choose value',
    direction: 'bottom left',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
    onChange: (value: string) => {},
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'Choose value',
    defaultValue: 'Choose value',
    direction: 'bottom right',
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '456', disabled: true },
        { value: '3', content: '789' },
    ],
};
