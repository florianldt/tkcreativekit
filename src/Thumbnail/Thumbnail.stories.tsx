import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Thumbnail } from './Thumbnail';
import { Size, ThumbnailProps } from './types';

const commonProps: Pick<ThumbnailProps, 'alt' | 'src'> = {
    alt: 'Creative Tokyo',
    src: 'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
};

export default {
    title: 'tkcreativekit/Atoms/Thumbnail',
    component: Thumbnail,
    args: commonProps,
    decorators: [
        (Story) => <div style={{ display: 'flex', gap: 10 }}>{Story()}</div>,
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A905&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof Thumbnail>;

const sizes: Size[] = ['small', 'medium', 'large'];

function Squared(): JSX.Element[] {
    return sizes.map((size) => (
        <Thumbnail key={size} {...commonProps} size={size} shape="squared" />
    ));
}

function Rounded(): JSX.Element[] {
    return sizes.map((size) => (
        <Thumbnail key={size} {...commonProps} size={size} shape="rounded" />
    ));
}

function Circle(): JSX.Element[] {
    return sizes.map((size) => (
        <Thumbnail key={size} {...commonProps} size={size} shape="circle" />
    ));
}

const Template: ComponentStory<typeof Thumbnail> = (args) => (
    <Thumbnail {...args} />
);

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
    size: 'medium',
    shape: 'rounded',
};

export { Squared, Rounded, Circle, Sandbox };
