import { JobListItemDataProps } from '../JobListItem';

type Shape = 'squared' | 'rounded' | 'pill';

type JobListProps = {
    bottomButtonLabel?: string;
    className?: string;
    data: JobListItemDataProps[];
    onBottomButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    shape?: Shape;
    title: string;
};

export type { JobListProps, Shape };
