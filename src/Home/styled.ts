import styled from 'styled-components';

const Root = styled.div``;

const Main = styled.main`
    max-width: 1140px;
    margin: 0 auto;
`;

const MainInnerWrapper = styled.div`
    padding: 40px 16px 180px 16px;

    @media (${({ theme }) => theme.breakpoints.tabletAndUp}) {
        padding-left: 22px;
        padding-right: 22px;
    }
`;

const JobSection = styled.section`
    padding: 20px 0;
`;

export { JobSection, Main, MainInnerWrapper, Root };
