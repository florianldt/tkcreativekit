import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
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
                company: 'Scoville',
                id: '9b287444-4417-43fa-880a-772722862888',
                location: 'Tokyo',
                logoUrl: '/companies/scoville.jpg',
                position: 'Fullstack Web Engineer',
            },
            {
                company: 'Octopus Energy',
                id: '795fb528-f15c-4c86-af92-315054f42f36',
                location: 'Tokyo',
                logoUrl: '/companies/octopus-energy.jpg',
                position: 'Back-end Developer',
            },
            {
                company: 'HENNGE',
                id: '8079fea5-75a8-4266-9eab-d016fe066111',
                location: 'Tokyo',
                logoUrl: '/companies/hennge.jpg',
                position: 'Senior Software Engineer (Python)',
            },
            {
                company: 'HENNGE',
                id: '557b4c2c-7098-4626-831b-944a2241e763',
                location: 'Tokyo',
                logoUrl: '/companies/hennge.jpg',
                position: 'Senior Front-end Engineer (React)',
            },
            {
                company: 'AirTrunk',
                id: '79222d09-afe6-4359-b776-93857c2405d9',
                location: 'Tokyo',
                logoUrl: '/companies/airtrunk.jpg',
                position: 'Project Manager',
            },
            {
                company: 'Woven Planet',
                id: '86247768-23c4-46e2-a970-f35779a5c66b',
                location: 'Tokyo',
                logoUrl: '/companies/woven-planet.jpg',
                position: 'Senior UX Designer, Core Advanced UX',
            },
            {
                company: 'HENNGE',
                id: '14a0027b-26af-4d62-8d2e-d581df21a6e0',
                location: 'Tokyo',
                logoUrl: '/companies/hennge.jpg',
                position: 'Senior Front-end Engineer (Vue)',
            },
            {
                company: 'HENNGE',
                id: '717428aa-8481-49c5-a179-a4dd14ca59f6',
                location: 'Tokyo',
                logoUrl: '/companies/hennge.jpg',
                position: 'Senior Software Engineer (Go)',
            },
            {
                company: 'Kobe University',
                id: '22466dc9-5a01-44df-9f87-91efa7368435',
                location: 'Tokyo',
                logoUrl: '/companies/kobe-university.jpg',
                position: 'Press Release Writer',
            },
            {
                company: 'Wunderman Thompson',
                id: '74302e19-b05b-4599-9f76-5470ada64125',
                location: 'Tokyo',
                logoUrl: '/companies/wunderman-thompson.jpg',
                position: 'UI Designer',
            },
            {
                company: 'Wunderman Thompson',
                id: 'f718e9ea-144c-4d3b-8a0a-455e94a4fc2f',
                location: 'Tokyo',
                logoUrl: '/companies/wunderman-thompson.jpg',
                position: 'Senior UX/UI Designer',
            },
            {
                company: 'Niantic, Inc.',
                id: '61dd121e-26e6-4074-9195-02a794fd4ee6',
                location: 'Tokyo',
                logoUrl: '/companies/niantic-inc.jpg',
                position: 'Product Manager, Growth',
            },
            {
                company: 'Niantic, Inc.',
                id: '2e8bef3a-38e8-483d-a48f-abf8a43e1e22',
                location: 'Tokyo',
                logoUrl: '/companies/niantic-inc.jpg',
                position: 'Staff UX Researcher, Pokemon GO',
            },
            {
                company: 'Niantic, Inc.',
                id: '49e00d74-c496-4e64-ac83-f37a188d17fa',
                location: 'Tokyo',
                logoUrl: '/companies/niantic-inc.jpg',
                position: 'Software Engineer, Game Development',
            },
            {
                company: 'Cisco Meraki',
                id: '055a71ed-e3b0-4507-89e5-905e314a7e88',
                location: 'Tokyo',
                logoUrl: '/companies/cisco-meraki.jpg',
                position: 'Senior Integrated Marketing Manager',
            },
            {
                company: 'Autify',
                id: 'c7e92713-e2b0-4c48-8f58-7408a771b5ed',
                location: 'Tokyo',
                logoUrl: '/companies/autify.jpg',
                position: 'Senior Software Engineer, Backend',
            },
            {
                company: 'nanameue',
                id: '5eb9414e-caac-4c0d-82cf-5cd7ad8fd2dd',
                location: 'Tokyo',
                logoUrl: '/companies/nanameue.jpg',
                position: 'Lead iOS Developer',
            },
            {
                company: 'nanameue',
                id: '09b7bb0e-c94d-4fef-a792-28f5d5daec0e',
                location: 'Tokyo',
                logoUrl: '/companies/nanameue.jpg',
                position: 'Marketing Manager',
            },
            {
                company: 'nanameue',
                id: '1e03c3a4-3737-4f71-9000-9d1626a2e555',
                location: 'Tokyo',
                logoUrl: '/companies/nanameue.jpg',
                position: 'Digital Marketing Specialist',
            },
            {
                company: 'Citadel',
                id: '024743b2-39b3-4c72-aa81-11b47f46101b',
                location: 'Tokyo',
                logoUrl: '/companies/citadel.jpg',
                position: 'Back-end Engineer',
            },
        ],
        latestJobs: [
            {
                company: 'Altera Consulting LLC',
                id: '67759cf7-2fab-40d2-8047-fe6b45ce45be',
                location: 'Tokyo',
                logoUrl: '/companies/altera-consulting-llc.jpg',
                position: 'Digital Transformation Consultant',
            },
            {
                company: 'Automotive Company',
                id: '8cef5129-667a-4cfd-bdbb-250f0fba12ea',
                location: 'Tokyo',
                logoUrl: '/companies/automotive-company.png',
                position: 'Creative Director',
            },
            {
                company: 'E-Housing',
                id: '9b287444-4417-43fa-880a-772722862888',
                location: 'Tokyo',
                logoUrl: '/companies/ehousing.jpg',
                position: 'Content Creator / Social Media Marketer',
            },
            {
                company: 'Eighty Days Inc.',
                id: '8079fea5-75a8-4266-9eab-d016fe066111',
                location: 'Tokyo',
                logoUrl: '/companies/eighty-days-inc.jpg',
                position: 'Customer Communicator / Itinerary Creator',
            },
            {
                company: 'Loftwork',
                id: '8afda503-2d61-4c21-b1e3-0f7eedae849d',
                location: 'Tokyo',
                logoUrl: '/companies/loftwork.jpg',
                position: 'Creative Director',
            },
            {
                company: 'Monstarlab',
                id: '40d215ef-fe97-473a-b86b-65695dd712b8',
                location: 'Tokyo',
                logoUrl: '/companies/monstarlab.jpg',
                position: 'Tech Lead - Backend Engineer',
            },
        ],
    },
    featuredJobsListBottomButtonLabel: 'See all featured jobs',
    featuredJobsListTitle: 'Featured jobs',
    heroSubtitle:
        'Find creative, product and engineering jobs in Tokyo and Japan on our Job Board.',
    heroTitle: 'Job Board',
    lastestJobsListTitle: 'Latest jobs',
    onFeaturedJobsListBottomButtonClick: action('clicked'),
    shape: 'rounded',
};

export default {
    title: 'tkcreativekit/Pages/Home',
    component: Home,
    components: { Header, Hero, JobList },
    args: commonProps,
    parameters: {
        design: [
            {
                type: 'figma',
                name: '<laptopAndUp',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=208%3A4428&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'laptopAndUp',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=208%3A4079&t=RKZ5iA69dPfpRTGy-1',
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

export { Squared, Rounded, Pill };
