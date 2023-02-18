import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { ButtonProps, Kind, Shape, Size } from './types';

const commonProps: Pick<ButtonProps, 'children' | 'onClick'> = {
    children: 'Click me',
    onClick: action('clicked'),
};

export default {
    title: 'tkcreativekit/Atoms/Button',
    component: Button,
    args: commonProps,
    parameters: {
        design: [
            {
                type: 'figma',
                name: 'Small',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A747&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'Medium',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A785&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'Large',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A823&t=RKZ5iA69dPfpRTGy-1',
            },
        ],
    },
} as ComponentMeta<typeof Button>;

const kinds: Kind[] = ['primary', 'secondary', 'ghost'];
const shapes: Shape[] = ['squared', 'rounded', 'pill'];
const sizes: Size[] = ['small', 'medium', 'large'];

function Primary(): JSX.Element {
    return (
        <>
            {shapes.map((shape) => (
                <div style={{ display: 'flex' }}>
                    {sizes.map((size) => (
                        <div key={`${shape}:${size}`} style={{ margin: 5 }}>
                            <Button
                                {...commonProps}
                                size={size}
                                shape={shape}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

function Secondary(): JSX.Element {
    return (
        <>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`squared:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="secondary"
                            size={size}
                            shape="squared"
                        />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`rounded:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="secondary"
                            size={size}
                            shape="rounded"
                        />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`pill:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="secondary"
                            size={size}
                            shape="pill"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

function Ghost(): JSX.Element {
    return (
        <>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`squared:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="ghost"
                            size={size}
                            shape="squared"
                        />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`rounded:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="ghost"
                            size={size}
                            shape="rounded"
                        />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                {sizes.map((size) => (
                    <div key={`pill:${size}`} style={{ margin: 5 }}>
                        <Button
                            {...commonProps}
                            kind="ghost"
                            size={size}
                            shape="pill"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

function Loading(): JSX.Element {
    return (
        <div style={{ display: 'flex' }}>
            {kinds.map((kind) => (
                <div key={kind} style={{ margin: 5 }}>
                    <Button {...commonProps} kind={kind} isLoading />
                </div>
            ))}
        </div>
    );
}

function Disabled(): JSX.Element {
    return (
        <div style={{ display: 'flex' }}>
            {kinds.map((kind) => (
                <div key={kind} style={{ margin: 5 }}>
                    <Button {...commonProps} kind={kind} disabled />
                </div>
            ))}
        </div>
    );
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
    disabled: false,
    isLoading: false,
    kind: 'primary',
    size: 'medium',
    shape: 'pill',
    type: 'button',
};

export { Primary, Secondary, Ghost, Loading, Disabled, Sandbox };
