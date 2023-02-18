type Shape = 'squared' | 'rounded' | 'circle';
type Size = 'small' | 'medium' | 'large';

type RootStyleProps = {
    shape: Shape;
    size: Size;
};

type ThumbnailProps = {
    alt?: string;
    className?: string;
    shape?: Shape;
    size?: Size;
    src?: string;
};

export type { RootStyleProps, Size, Shape, ThumbnailProps };
