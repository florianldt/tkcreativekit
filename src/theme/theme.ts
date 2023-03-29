import { DefaultTheme } from 'styled-components';
import type { Breakpoints, Colors, Elevations } from './types';

function hexToRgba(hex: string, opacity = 1) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return (
            'rgba(' +
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
            ', ' +
            opacity +
            ')'
        );
    }
    throw new Error('Bad Hex');
}

const breakpoints: Breakpoints = {
    mobileAndUp: 'min-width: 320px',
    tabletAndUp: 'min-width: 600px',
    desktopAndUp: 'min-width: 1136px',
};

const colors: Colors = {
    gray100: '#2B2B2B',
    gray70: '#777777',
    gray40: '#E4E4E4',
    gray10: '#F7F7F7',
    white: '#FEFEFE',
    accent: '#029CFD',
};

const elevations: Elevations = {
    elevation100: `0 15px 40px 0 ${hexToRgba(colors.gray70, 0.3)}`,
    elevation50: `0 10px 30px 0 ${hexToRgba(colors.gray70, 0.3)}`,
    elevation10: `0 5px 20px 0 ${hexToRgba(colors.gray70, 0.3)}`,
};

const theme: DefaultTheme = {
    breakpoints,
    colors,
    elevations,
};

export { theme };
