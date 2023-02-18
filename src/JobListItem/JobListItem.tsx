import React from 'react';
import {
    CompanyLabel as StyledCompanyLabel,
    Root as StyledRoot,
    TextStack as StyledTextStack,
} from './styled';
import { JobListItemProps } from './types';
import { Badge } from '../Badge';
import { Thumbnail } from '../Thumbnail';
import { LabelMedium } from '../Typography';

function JobListItem({
    className,
    data,
    elevation = 'medium',
    shape = 'rounded',
}: JobListItemProps): JSX.Element {
    const { company, location, logoUrl, position } = data;

    return (
        <StyledRoot className={className} elevation={elevation}>
            <Thumbnail
                alt={company}
                shape={shape === 'pill' ? 'circle' : shape}
                src={logoUrl}
            />
            <StyledTextStack>
                <LabelMedium>{position}</LabelMedium>
                <StyledCompanyLabel>{company}</StyledCompanyLabel>
            </StyledTextStack>
            <div>
                <Badge shape={shape} text={location} />
            </div>
        </StyledRoot>
    );
}

export { JobListItem };
