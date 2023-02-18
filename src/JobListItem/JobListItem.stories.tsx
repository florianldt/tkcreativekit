import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { JobListItem } from './JobListItem';
import { Elevation, JobListItemProps } from './types';
import { Badge } from '../Badge';
import { Thumbnail } from '../Thumbnail';
import { LabelMedium } from '../Typography';

const commonProps: Pick<JobListItemProps, 'data'> = {
    data: {
        company: 'Creative Tokyo',
        id: '79222d09-afe6-4359-b776-93857c2405d9',
        location: 'Tokyo',
        logoUrl: '/companies/automotive-company.png',
        position: 'Graphic Designer',
    },
};

export default {
    title: 'tkcreativekit/Molecules/JobListItem',
    component: JobListItem,
    components: { Badge, Thumbnail, LabelMedium },
    args: commonProps,
    decorators: [
        (Story) => <div style={{ maxWidth: 414, gap: 20 }}>{Story()}</div>,
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=25%3A943&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof JobListItem>;

const elevations: Elevation[] = ['light', 'medium', 'heavy'];

function Squared(): JSX.Element[] {
    return elevations.map((elevation) => (
        <ul key={elevation} style={{ margin: '40px 0' }}>
            <JobListItem
                key={elevation}
                {...commonProps}
                elevation={elevation}
                shape="squared"
            />
        </ul>
    ));
}

function Rounded(): JSX.Element[] {
    return elevations.map((elevation) => (
        <ul key={elevation} style={{ margin: '40px 0' }}>
            <JobListItem
                key={elevation}
                {...commonProps}
                elevation={elevation}
                shape="rounded"
            />
        </ul>
    ));
}

function Pill(): JSX.Element[] {
    return elevations.map((elevation) => (
        <ul key={elevation} style={{ margin: '40px 0' }}>
            <JobListItem
                key={elevation}
                {...commonProps}
                elevation={elevation}
                shape="pill"
            />
        </ul>
    ));
}

const Template: ComponentStory<typeof JobListItem> = (args) => (
    <JobListItem {...args} />
);

const Sandbox = Template.bind({});
Sandbox.args = {
    className: '',
    elevation: 'medium',
    shape: 'pill',
};

export { Squared, Rounded, Pill, Sandbox };
