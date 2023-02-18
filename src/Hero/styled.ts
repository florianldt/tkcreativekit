import styled from 'styled-components';
import { ParagraphLarge } from '../Typography';

const Root = styled.div`
    padding: 60px 0 140px;
`;

const Subtitle = styled(ParagraphLarge)`
    max-width: 340px;
    color: ${({ theme }) => theme.colors.gray70};
`;

export { Root, Subtitle };
