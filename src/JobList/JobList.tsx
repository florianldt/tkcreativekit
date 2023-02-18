import React from 'react';
import {
    CTAContainer as StyledCTAContainer,
    EmptyContainer as StyledEmptyContainer,
    Grid as StyledGrid,
    Root as StyledRoot,
    TitleLabel,
} from './styled';
import { JobListProps } from './types';
import { Button } from '../Button';
import { JobListItem } from '../JobListItem';
import { LabelSmall } from '../Typography';

function JobList({
    bottomButtonLabel = 'View all',
    className,
    data,
    onBottomButtonClick,
    shape = 'rounded',
    title,
}: JobListProps): JSX.Element {
    const isEmpty = !data.length;

    return (
        <StyledRoot className={className}>
            <TitleLabel>{title}</TitleLabel>
            {isEmpty ? (
                <StyledEmptyContainer>
                    <LabelSmall>Nothing to see here for now...</LabelSmall>
                </StyledEmptyContainer>
            ) : (
                <>
                    <StyledGrid>
                        {data.map((item) => (
                            <JobListItem
                                key={item.id}
                                data={item}
                                shape={shape}
                            />
                        ))}
                    </StyledGrid>
                    {onBottomButtonClick && (
                        <StyledCTAContainer>
                            <Button onClick={onBottomButtonClick} shape={shape}>
                                {bottomButtonLabel}
                            </Button>
                        </StyledCTAContainer>
                    )}
                </>
            )}
        </StyledRoot>
    );
}

export { JobList };
