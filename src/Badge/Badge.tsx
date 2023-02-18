import React from 'react';
import { Root as StyledRoot } from './styled';
import { BadgeProps } from './types';

function Badge({
    className,
    kind = 'primary',
    shape = 'pill',
    text,
}: BadgeProps): JSX.Element {
    return (
        <StyledRoot className={className} kind={kind} shape={shape}>
            {text}
        </StyledRoot>
    );
}

export { Badge };
