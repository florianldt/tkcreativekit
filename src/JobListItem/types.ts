type Elevation = 'light' | 'medium' | 'heavy';
type Shape = 'squared' | 'rounded' | 'pill';

type RootStyleProps = {
    elevation?: Elevation;
};

type DataProps = {
    company: string;
    id: string;
    logoUrl: string;
    position: string;
    location: string;
};

type JobListItemProps = RootStyleProps & {
    className?: string;
    data: DataProps;
    shape?: Shape;
};

export type { DataProps, Elevation, JobListItemProps, RootStyleProps, Shape };
