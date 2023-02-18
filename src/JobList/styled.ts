import styled from 'styled-components';
import { LabelLarge } from '../Typography';

const Root = styled.div``;

const TitleLabel = styled(LabelLarge)`
    font-weight: 700;
`;

const Grid = styled.ul`
    margin-top: 28px;

    @media (${({ theme }) => theme.breakpoints.tabletAndUp}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 28px;
    }
`;

const EmptyContainer = styled.div`
    margin-top: 28px;
    text-align: center;
`;

const CTAContainer = styled.div`
    margin-top: 48px;
    text-align: center;
`;

export { CTAContainer, EmptyContainer, Grid, Root, TitleLabel };
