import React from 'react';
import {
    HeaderLogo as StyledHeaderLogo,
    InnerWapper as StyledInnerWrapper,
    OuterWapper as StyledOuterWrapper,
    Root as StyledRoot,
} from './styled';
import { HeaderProps } from './types';

function Header({ className }: HeaderProps): JSX.Element {
    return (
        <StyledRoot className={className}>
            <StyledOuterWrapper>
                <StyledInnerWrapper>
                    <StyledHeaderLogo />
                </StyledInnerWrapper>
            </StyledOuterWrapper>
        </StyledRoot>
    );
}

export { Header };
