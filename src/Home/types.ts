import { JobListItemDataProps } from '../JobListItem';

type Shape = 'squared' | 'rounded' | 'pill';

type DataProps = {
    featuredJobs: JobListItemDataProps[];
    latestJobs: JobListItemDataProps[];
};

type HomeProps = {
    className?: string;
    data: DataProps;
    featuredJobsListBottomButtonLabel?: string;
    featuredJobsListTitle?: string;
    heroSubtitle?: string;
    heroTitle?: string;
    lastestJobsListTitle?: string;
    onFeaturedJobsListBottomButtonClick?: (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => void;
    shape?: Shape;
};

export type { DataProps, HomeProps, Shape };
