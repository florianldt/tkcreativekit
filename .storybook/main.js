module.exports = {
    stories: [
        './Introduction.stories.mdx',
        './Breakpoint.stories.tsx',
        './Color.stories.tsx',
        './Elevation.stories.tsx',
        '../**/*.stories.mdx',
        '../**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        'storybook-addon-designs',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    staticDirs: ['../public'],
};
