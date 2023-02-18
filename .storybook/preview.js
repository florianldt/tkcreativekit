import { createGlobalStyle } from 'styled-components';
import { withTheme } from './withTheme.decorator';
import styleReset from '../src/theme/styleReset';

const GlobalStyle = createGlobalStyle`
    ${styleReset}
`;

const withGlobalStyle = (Story) => (
    <>
        <GlobalStyle />
        <Story />
    </>
);

const customViewports = {
    iphone14: {
        name: 'iPhone 14',
        styles: {
            width: '390px',
            height: '844px',
        },
    },
    iphone14Pro: {
        name: 'iPhone 14 Pro',
        styles: {
            width: '393px',
            height: '852px',
        },
    },
    iphone14Plus: {
        name: 'iPhone 14 Plus',
        styles: {
            width: '428px',
            height: '926px',
        },
    },
    iphone14ProMax: {
        name: 'iPhone 14 Pro Max',
        styles: {
            width: '430px',
            height: '932px',
        },
    },
    iphone13mini: {
        name: 'iPhone 13 mini',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    iphoneSE: {
        name: 'iPhone SE',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iphone8Plus: {
        name: 'iPhone 8 Plus',
        styles: {
            width: '414px',
            height: '736px',
        },
    },
    iphone8: {
        name: 'iPhone 8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    ipadMini83: {
        name: 'iPad mini 8.3',
        styles: {
            width: '744px',
            height: '1133px',
        },
    },
    ipadPro11: {
        name: 'iPad Pro 11"',
        styles: {
            width: '834px',
            height: '1194px',
        },
    },
    ipadPro129: {
        name: 'iPad Pro 12.9"',
        styles: {
            width: '1024px',
            height: '1366px',
        },
    },
    macbookAir: {
        name: 'MacBook Air',
        styles: {
            width: '1280px',
            height: '832px',
        },
    },
    macbookPro14: {
        name: 'MacBook Pro 14"',
        styles: {
            width: '1512px',
            height: '982px',
        },
    },
    macbookPro16: {
        name: 'MacBook Pro 16"',
        styles: {
            width: '1728px',
            height: '1117px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Tokens',
                'Atoms',
                'Molecules',
                'Organisms',
                'Templates',
                'Pages',
            ],
        },
    },
    viewport: {
        viewports: customViewports,
    },
};

export const decorators = [withGlobalStyle, withTheme];
