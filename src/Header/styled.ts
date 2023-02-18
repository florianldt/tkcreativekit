import styled from 'styled-components';
import { Logo } from '../Logo';

const Root = styled.div``;

const OuterWapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};
`;

const InnerWapper = styled.div`
    padding: 8px 16px;

    @media (${({ theme }) => theme.breakpoints.tabletAndUp}) {
        padding: 18px 22px;
    }
`;

const HeaderLogo = styled(Logo)`
    height: 14px;

    @media (${({ theme }) => theme.breakpoints.tabletAndUp}) {
        height: 22px;
    }
`;

export { HeaderLogo, InnerWapper, OuterWapper, Root };
