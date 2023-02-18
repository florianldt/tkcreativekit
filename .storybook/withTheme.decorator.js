import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

export const withTheme = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
);
