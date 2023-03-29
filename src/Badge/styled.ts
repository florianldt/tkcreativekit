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
                border: 2px solid ${theme.colors.gray100};
                color: ${theme.colors.white};
            `;
        case 'secondary':
            return css`
                background-color: transparent;
                border: 2px solid ${theme.colors.gray100};
                color: ${theme.colors.gray100};
            `;
    }
}

function getShapeStyles({ shape }: RootStyleProps) {
    switch (shape) {
        case 'squared':
            break;
        case 'rounded':
            return css`
                border-radius: 14px;
            `;
        case 'pill':
            return css`
                border-radius: 24px;
            `;
    }
}

const Root = styled.span<RootStyleProps>`
    ${(props) => getKindStyles(props)}
    ${(props) => getShapeStyles(props)}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding: 3px 10px;
    font-size: 12px;
`;

export { Root };
