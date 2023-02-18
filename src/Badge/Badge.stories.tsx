import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';
import { BadgeProps, Shape } from './types';

const commonProps: Pick<BadgeProps, 'text'> = {
    text: 'Graphic Design',
};

export default {
    title: 'tkcreativekit/Atoms/Badge',
    component: Badge,
    args: commonProps,
    decorators: [
        (Story) => <div style={{ display: 'flex', gap: 10 }}>{Story()}</div>,
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A861&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof Badge>;

const shapes: Shape[] = ['squared', 'rounded', 'pill'];

function Primary(): JSX.Element[] {
    return shapes.map((shape) => (
        <Badge key={shape} {...commonProps} shape={shape} />
    ));
}

function Secondary(): JSX.Element[] {
    return shapes.map((shape) => (
        <Badge key={shape} {...commonProps} kind="secondary" shape={shape} />
    ));
}

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
    kind: 'primary',
    shape: 'pill',
};

export { Primary, Secondary, Sandbox };
