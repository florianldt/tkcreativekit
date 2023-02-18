import styled, {
    css,
    DefaultTheme,
    ThemedStyledProps,
} from 'styled-components';
import { RootStyleProps } from './types';

function getKindStyles({
    kind,
    theme,
}: ThemedStyledProps<RootStyleProps, DefaultTheme>) {
    switch (kind) {
        case 'primary':
            return css`
                background-color: ${theme.colors.gray100};
                color: ${theme.colors.white};

                &:enabled {
                    &:hover,
                    &:active {
                        background-color: ${theme.colors.gray70};
                    }
                }
            `;
        case 'secondary':
            return css`
                background-color: ${theme.colors.gray40};
                color: ${theme.colors.gray100};

                &:enabled {
                    &:hover,
                    &:active {
                        background-color: ${theme.colors.gray10};
                    }
                }
            `;
        case 'ghost':
            return css`
                background-color: transparent;
                color: ${theme.colors.gray100};
            `;
    }
}

function getSizeStyles({ size }: RootStyleProps) {
    switch (size) {
        case 'small':
            return css`
                padding: 8px 18px;
                font-size: 12px;
            `;
        case 'medium':
            return css`
                padding: 12px 28px;
                font-size: 14px;
            `;
        case 'large':
            return css`
                padding: 18px 56px;
                font-size: 16px;
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
        case 'pill':
            return css`
                border-radius: 28px;
            `;
    }
}

const Root = styled.button<RootStyleProps>`
    ${(props) => getKindStyles(props)}
    ${(props) => getSizeStyles(props)}
    ${(props) => getShapeStyles(props)}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-weight: 500;
    border: 0;

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

export { Root };
