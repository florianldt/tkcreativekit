import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { JobList } from './JobList';
import { JobListProps } from './types';
import { Button } from '../Button';
import { JobListItem, JobListItemDataProps } from '../JobListItem';
import { LabelSmall } from '../Typography';

const commonProps: Pick<
    JobListProps,
    'data' | 'onBottomButtonClick' | 'title'
> = {
    data: [
        {
            company: 'Creative Tokyo',
            id: '67759cf7-2fab-40d2-8047-fe6b45ce45be',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
        {
            company: 'Creative Tokyo',
            id: '8cef5129-667a-4cfd-bdbb-250f0fba12ea',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
        {
            company: 'Creative Tokyo',
            id: '9b287444-4417-43fa-880a-772722862888',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
        {
            company: 'Creative Tokyo',
            id: '8079fea5-75a8-4266-9eab-d016fe066111',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
        {
            company: 'Creative Tokyo',
            id: '795fb528-f15c-4c86-af92-315054f42f36',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
        {
            company: 'Creative Tokyo',
            id: '79222d09-afe6-4359-b776-93857c2405d9',
            location: 'Tokyo',
            logoUrl:
                'https://firebasestorage.googleapis.com/v0/b/creativetokyo-com.appspot.com/o/companies%2Fautomotive-company_256x256?alt=media',
            position: 'Graphic Designer',
        },
    ],
    onBottomButtonClick: action('clicked'),
    title: 'Latest jobs',
};

export default {
    title: 'tkcreativekit/Organisms/JobList',
    component: JobList,
    components: { Button, JobListItem, LabelSmall },
    args: commonProps,
    decorators: [(Story) => <div style={{ maxWidth: 1080 }}>{Story()}</div>],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=204%3A1561&t=RKZ5iA69dPfpRTGy-1',
        },
    },
} as ComponentMeta<typeof JobList>;

function Squared(): JSX.Element {
    return <JobList {...commonProps} shape="squared" />;
}

function Rounded(): JSX.Element {
    return <JobList {...commonProps} onBottomButtonClick={undefined} />;
}

function Pill(): JSX.Element {
    return (
        <JobList
            {...commonProps}
            shape="pill"
            onBottomButtonClick={undefined}
        />
    );
}

function Odd(): JSX.Element {
    const oddItems: JobListItemDataProps[] = commonProps.data.slice(0, -1);
    return (
        <JobList
            {...commonProps}
            data={oddItems}
            onBottomButtonClick={undefined}
        />
    );
}

function WithBottomButton(): JSX.Element {
    return (
        <JobList
            {...commonProps}
            bottomButtonLabel="View all latest jobs"
            onBottomButtonClick={action('clicked')}
        />
    );
}

function Empty(): JSX.Element {
    return (
        <JobList
            {...commonProps}
            bottomButtonLabel="View all latest jobs"
            data={[]}
        />
    );
}

const Template: ComponentStory<typeof JobList> = (args) => (
    <JobList {...args} />
);

const Sandbox = Template.bind({});
Sandbox.args = {
    bottomButtonLabel: 'See all',
    className: '',
    shape: 'rounded',
};

export { Squared, Rounded, Pill, Odd, WithBottomButton, Empty, Sandbox };
