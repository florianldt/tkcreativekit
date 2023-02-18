import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Home } from './Home';
import { HomeProps } from './types';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { JobList } from '../JobList';

const commonProps: HomeProps = {
    className: '',
    data: {
        featuredJobs: [
            {
                company: 'Lorem ipsum',
                id: '9b287444-4417-43fa-880a-772722862888',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '795fb528-f15c-4c86-af92-315054f42f36',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '8079fea5-75a8-4266-9eab-d016fe066111',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '557b4c2c-7098-4626-831b-944a2241e763',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '79222d09-afe6-4359-b776-93857c2405d9',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '86247768-23c4-46e2-a970-f35779a5c66b',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '14a0027b-26af-4d62-8d2e-d581df21a6e0',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '717428aa-8481-49c5-a179-a4dd14ca59f6',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '22466dc9-5a01-44df-9f87-91efa7368435',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '74302e19-b05b-4599-9f76-5470ada64125',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: 'f718e9ea-144c-4d3b-8a0a-455e94a4fc2f',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '61dd121e-26e6-4074-9195-02a794fd4ee6',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '2e8bef3a-38e8-483d-a48f-abf8a43e1e22',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '49e00d74-c496-4e64-ac83-f37a188d17fa',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '055a71ed-e3b0-4507-89e5-905e314a7e88',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: 'c7e92713-e2b0-4c48-8f58-7408a771b5ed',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '5eb9414e-caac-4c0d-82cf-5cd7ad8fd2dd',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '09b7bb0e-c94d-4fef-a792-28f5d5daec0e',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '1e03c3a4-3737-4f71-9000-9d1626a2e555',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '024743b2-39b3-4c72-aa81-11b47f46101b',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
        ],
        latestJobs: [
            {
                company: 'Lorem ipsum',
                id: '67759cf7-2fab-40d2-8047-fe6b45ce45be',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '8cef5129-667a-4cfd-bdbb-250f0fba12ea',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '9b287444-4417-43fa-880a-772722862888',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '8079fea5-75a8-4266-9eab-d016fe066111',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '8afda503-2d61-4c21-b1e3-0f7eedae849d',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
            {
                company: 'Lorem ipsum',
                id: '40d215ef-fe97-473a-b86b-65695dd712b8',
                location: 'Lorem',
                logoUrl: 'https://via.placeholder.com/150',
                position: 'Lorem ipsum',
            },
        ],
    },
    featuredJobsListBottomButtonLabel: 'Lorem ipsum',
    featuredJobsListTitle: 'Loream ipsum',
    heroSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    heroTitle: 'Lorem ipsum',
    lastestJobsListTitle: 'Lorem ipsum',
    onFeaturedJobsListBottomButtonClick: action('clicked'),
    shape: 'rounded',
};

export default {
    title: 'tkcreativekit/Templates/Home',
    component: Home,
    components: { Header, Hero, JobList },
    args: commonProps,
    parameters: {
        design: [
            {
                type: 'figma',
                name: '<laptopAndUp',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=206%3A3112&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'laptopAndUp',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=206%3A3618&t=RKZ5iA69dPfpRTGy-1',
            },
        ],
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Home>;

function Squared(): JSX.Element {
    return <Home {...commonProps} shape="squared" />;
}

function Rounded(): JSX.Element {
    return <Home {...commonProps} shape="rounded" />;
}

function Pill(): JSX.Element {
    return <Home {...commonProps} shape="pill" />;
}

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

const Sandbox = Template.bind({});

export { Squared, Rounded, Pill, Sandbox };
