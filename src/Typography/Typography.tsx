import React from 'react';
import {
    Display as StyledDisplay,
    HeadingLarge as StyledHeadingLarge,
    HeadingMedium as StyledHeadingMedium,
    HeadingSmall as StyledHeadingSmall,
    LabelLarge as StyledLabelLarge,
    LabelMedium as StyledLabelMedium,
    LabelSmall as StyledLabelSmall,
    ParagraphLarge as StyledParagraphLarge,
    ParagraphMedium as StyledParagraphMedium,
    ParagraphSmall as StyledParagraphSmall,
} from './styled';
import { TypographyProps } from './types';

function Display({ children, className }: TypographyProps): JSX.Element {
    return <StyledDisplay className={className}>{children}</StyledDisplay>;
}

function HeadingLarge({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledHeadingLarge className={className}>
            {children}
        </StyledHeadingLarge>
    );
}

function HeadingMedium({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledHeadingMedium className={className}>
            {children}
        </StyledHeadingMedium>
    );
}

function HeadingSmall({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledHeadingSmall className={className}>
            {children}
        </StyledHeadingSmall>
    );
}

function LabelLarge({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledLabelLarge className={className}>{children}</StyledLabelLarge>
    );
}

function LabelMedium({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledLabelMedium className={className}>{children}</StyledLabelMedium>
    );
}

function LabelSmall({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledLabelSmall className={className}>{children}</StyledLabelSmall>
    );
}

function ParagraphLarge({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledParagraphLarge className={className}>
            {children}
        </StyledParagraphLarge>
    );
}

function ParagraphMedium({
    children,
    className,
}: TypographyProps): JSX.Element {
    return (
        <StyledParagraphMedium className={className}>
            {children}
        </StyledParagraphMedium>
    );
}

function ParagraphSmall({ children, className }: TypographyProps): JSX.Element {
    return (
        <StyledParagraphSmall className={className}>
            {children}
        </StyledParagraphSmall>
    );
}

export {
    Display,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    LabelLarge,
    LabelMedium,
    LabelSmall,
    ParagraphLarge,
    ParagraphMedium,
    ParagraphSmall,
};
