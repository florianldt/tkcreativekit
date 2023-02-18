type Kind = 'primary' | 'secondary';
type Shape = 'squared' | 'rounded' | 'pill';

type RootStyleProps = {
    kind?: Kind;
    shape?: Shape;
};

type BadgeProps = RootStyleProps & {
    className?: string;
    text: string;
};

export type { Kind, RootStyleProps, Shape, BadgeProps };
