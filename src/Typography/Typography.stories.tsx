import React from 'react';
import { TypographyProps } from './types';
import {
    Display,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    LabelLarge,
    LabelMedium,
    LabelSmall,
    ParagraphLarge,
    ParagraphMedium,
    ParagraphSmall,
} from './Typography';

const commonProps: Pick<TypographyProps, 'children'> = {
    children: 'Expect problems and eat them for breakfast. 0123456789',
};

export default {
    title: 'tkcreativekit/Atoms/Typography',
    component: { Display, HeadingLarge, HeadingMedium, HeadingSmall },
    parameters: {
        design: [
            {
                type: 'figma',
                name: 'Display',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=30%3A1019&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'Heading',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=84%3A5&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'Label',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=84%3A20&t=RKZ5iA69dPfpRTGy-1',
            },
            {
                type: 'figma',
                name: 'Paragraph',
                url: 'https://www.figma.com/file/xzj8gzuhGNqVyGfFNtCglC/TKCreativeKit?node-id=84%3A35&t=RKZ5iA69dPfpRTGy-1',
            },
        ],
    },
};

function Default(): JSX.Element {
    return <Display {...commonProps} />;
}
Default.storyName = 'Display';

function Heading(): JSX.Element {
    return (
        <>
            <HeadingLarge {...commonProps} />
            <HeadingMedium {...commonProps} />
            <HeadingSmall {...commonProps} />
        </>
    );
}

function Label(): JSX.Element {
    return (
        <>
            <LabelLarge {...commonProps} />
            <LabelMedium {...commonProps} />
            <LabelSmall {...commonProps} />
        </>
    );
}

function Paragraph(): JSX.Element {
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (
        <>
            <ParagraphLarge>{text}</ParagraphLarge>
            <ParagraphMedium>{text}</ParagraphMedium>
            <ParagraphSmall>{text}</ParagraphSmall>
        </>
    );
}

export { Default, Heading, Label, Paragraph };
