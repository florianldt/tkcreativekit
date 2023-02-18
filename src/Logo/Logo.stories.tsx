import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Logo } from './Logo';

export default {
    title: 'tkcreativekit/Atoms/Logo',
    component: Logo,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=199%3A1006&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
    <div style={{ width: 320 }}>
        <Logo {...args} />
    </div>
);

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
};

export { Sandbox };
