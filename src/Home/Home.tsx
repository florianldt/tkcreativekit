import React from 'react';
import {
    JobSection as StyledJobSection,
    Main as StyledMain,
    MainInnerWrapper as StyledMainInnerWrapper,
    Root as StyledRoot,
} from './styled';
import { HomeProps } from './types';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { JobList } from '../JobList';

function Home({
    className,
    data,
    featuredJobsListBottomButtonLabel = 'See all featured jobs',
    featuredJobsListTitle = 'Featured jobs',
    heroSubtitle = 'Find creative, product and engineering jobs in Tokyo and Japan on our Job Board.',
    heroTitle = 'Job Board',
    lastestJobsListTitle = 'Latest jobs',
    onFeaturedJobsListBottomButtonClick,
    shape = 'rounded',
}: HomeProps): JSX.Element {
    const { featuredJobs, latestJobs } = data;
    return (
        <StyledRoot className={className}>
            <Header />
            <StyledMain>
                <StyledMainInnerWrapper>
                    <Hero subtitle={heroSubtitle} title={heroTitle} />
                    <StyledJobSection>
                        <JobList
                            data={latestJobs}
                            shape={shape}
                            title={lastestJobsListTitle}
                        />
                    </StyledJobSection>
                    <StyledJobSection>
                        <JobList
                            bottomButtonLabel={
                                featuredJobsListBottomButtonLabel
                            }
                            data={featuredJobs}
                            onBottomButtonClick={
                                onFeaturedJobsListBottomButtonClick
                            }
                            shape={shape}
                            title={featuredJobsListTitle}
                        />
                    </StyledJobSection>
                </StyledMainInnerWrapper>
            </StyledMain>
        </StyledRoot>
    );
}

export { Home };
