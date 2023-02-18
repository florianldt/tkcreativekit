import styled, { css } from 'styled-components';
import { RootStyleProps } from './types';

function getSizeStyles({ size }: RootStyleProps) {
    switch (size) {
        case 'small':
            return css`
                width: 48px;
                height: 48px;
            `;
        case 'medium':
            return css`
                width: 70px;
                height: 70px;
            `;
        case 'large':
            return css`
                width: 116px;
                height: 116px;
            `;
    }
}

function getShapeStyles({ shape }: RootStyleProps) {
    switch (shape) {
        case 'squared':
            break;
        case 'rounded':
            return css`
                border-radius: 7px;
            `;
        case 'circle':
            return css`
                border-radius: 50%;
            `;
    }
}

const Root = styled.div<RootStyleProps>`
    ${(props) => getSizeStyles(props)}
    ${(props) => getShapeStyles(props)}
    border: 1px solid ${({ theme }) => theme.colors.gray40};
    overflow: hidden;
`;

const Thumbnail = styled.img`
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

export { Root, Thumbnail };
