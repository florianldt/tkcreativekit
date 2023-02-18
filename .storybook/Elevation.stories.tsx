import React from 'react';
import { theme } from '../src';

export default {
    title: 'tkcreativekit/Tokens/Elevation',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=199%3A1115&t=RKZ5iA69dPfpRTGy-1',
        },
    },
};

function Default(): JSX.Element {
    return (
        <div style={{ display: 'flex', gap: 80 }}>
            {Object.entries(theme.elevations).map(([key, value]) => (
                <div key={key}>
                    <div
                        style={{
                            width: 100,
                            height: 100,
                            boxShadow: value,
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
