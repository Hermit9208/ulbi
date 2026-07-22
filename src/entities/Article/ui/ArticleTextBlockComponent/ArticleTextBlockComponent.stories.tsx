import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '@/entities/Article/model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        title: 'lorem ipsum',
        type: ArticleBlockType.TEXT,
        paragraphs: ['Your review', 'Profile'],
        id: '1',
    },
};
