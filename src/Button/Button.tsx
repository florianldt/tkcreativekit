import React from 'react';
import { Root as StyledRoot } from './styled';
import { ButtonProps } from './types';

function Button({
    children,
    className,
    disabled = false,
    isLoading = false,
    kind = 'primary',
    onClick,
    size = 'medium',
    shape = 'pill',
    type = 'button',
}: ButtonProps): JSX.Element {
    return (
        <StyledRoot
            className={className}
            disabled={disabled}
            kind={kind}
            onClick={(e) => {
                if (disabled || isLoading) {
                    return;
                }
                onClick?.(e);
            }}
            size={size}
            shape={shape}
            type={type}
        >
            {isLoading ? 'Loading...' : children}
        </StyledRoot>
    );
}

export { Button };
