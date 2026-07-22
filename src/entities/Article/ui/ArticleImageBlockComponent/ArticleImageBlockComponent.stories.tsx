import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '@/entities/Article/model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        src: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        title: 'Test',
        type: ArticleBlockType.IMAGE,
        id: '1',
    },
};
