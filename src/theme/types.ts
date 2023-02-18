import 'styled-components';

type Breakpoints = {
    mobileAndUp: string;
    tabletAndUp: string;
    desktopAndUp: string;
};

type Colors = {
    gray100: string;
    gray70: string;
    gray40: string;
    gray10: string;
    white: string;
    accent: string;
};

type Elevations = {
    elevation100: string;
    elevation50: string;
    elevation10: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: Breakpoints;
        colors: Colors;
        elevations: Elevations;
    }
}

export type { Breakpoints, Colors, Elevations };
