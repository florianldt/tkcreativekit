import React from 'react';
import { Root as StyledRoot, Subtitle as StyledSubtitle } from './styled';
import { HeroProps } from './types';
import { Display } from '../Typography';

function Hero({ className, subtitle, title }: HeroProps): JSX.Element {
    return (
        <StyledRoot className={className}>
            <Display>{title}</Display>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledRoot>
    );
}

export { Hero };
