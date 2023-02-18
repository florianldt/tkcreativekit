import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Hero } from './Hero';
import { Display, LabelLarge } from '../Typography';

export default {
    title: 'tkcreativekit/Organisms/Hero',
    component: Hero,
    components: { Display, LabelLarge },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=203%3A1347&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
    subtitle:
        'Find creative, product and engineering jobs in Tokyo and Japan on our Job Board.',
    title: 'Job Board',
};

export { Sandbox };
