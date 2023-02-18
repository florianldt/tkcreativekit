import React from 'react';
import { theme } from '../src';

export default {
    title: 'tkcreativekit/Tokens/Breakpoint',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A967&t=RKZ5iA69dPfpRTGy-1',
        },
    },
};

function Default(): JSX.Element {
    const values = [320, 600, 1136];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {Object.entries(theme.breakpoints).map(([key, value], index) => (
                <div key={key}>
                    <div
                        style={{
                            width: values[index],
                            height: 60,
                            borderRadius: 4,
                            border: `3px dashed ${theme.colors.gray40}`,
                        }}
                    />
                    <div
                        style={{
                            padding: '20px 4px 4px 4px',
                            color: `${theme.colors.gray70}`,
                        }}
                    >
                        {value}
                    </div>
                    <div style={{ padding: 4, fontWeight: 500 }}>{key}</div>
                </div>
            ))}
        </div>
    );
}

export { Default };
