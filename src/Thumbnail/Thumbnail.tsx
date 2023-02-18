import React from 'react';
import { Root as StyledRoot, Thumbnail as StyledThumbnail } from './styled';
import { ThumbnailProps } from './types';

function Thumbnail({
    alt = '',
    className,
    shape = 'rounded',
    size = 'medium',
    src,
}: ThumbnailProps): JSX.Element {
    return (
        <StyledRoot className={className} shape={shape} size={size}>
            <StyledThumbnail alt={alt} src={src} />
        </StyledRoot>
    );
}

export { Thumbnail };
