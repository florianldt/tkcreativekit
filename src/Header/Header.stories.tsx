import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Header } from './Header';
import { Logo } from '../Logo';

export default {
    title: 'tkcreativekit/Molecules/Header',
    component: Header,
    components: { Logo },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=199%3A1133&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
};

export { Sandbox };
