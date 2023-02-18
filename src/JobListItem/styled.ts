import styled, {
    css,
    DefaultTheme,
    ThemedStyledProps,
} from 'styled-components';
import { RootStyleProps } from './types';
import { LabelSmall } from '../Typography';

function getElevationStyles({
    elevation,
    theme,
}: ThemedStyledProps<RootStyleProps, DefaultTheme>) {
    let elevationValue: string;
    switch (elevation) {
        case 'light':
            elevationValue = theme.elevations.elevation10;
            break;
        case 'heavy':
            elevationValue = theme.elevations.elevation100;
            break;
        case 'medium':
        default:
            elevationValue = theme.elevations.elevation50;
            break;
    }
    return css`
        &:hover {
            box-shadow: ${elevationValue};
        }
    `;
}

const Root = styled.li<RootStyleProps>`
    ${(props) => getElevationStyles(props)}
    padding: 16px;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
`;

const TextStack = styled.div`
    padding: 4px 18px;
    flex: 1;
`;

const CompanyLabel = styled(LabelSmall)`
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.gray70};
`;

export { CompanyLabel, Root, TextStack };
