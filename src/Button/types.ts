type Kind = 'primary' | 'secondary' | 'ghost';
type Shape = 'squared' | 'rounded' | 'pill';
type Size = 'small' | 'medium' | 'large';
type Type = 'button' | 'submit';

type RootStyleProps = {
    disabled?: boolean;
    kind?: Kind;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    shape?: Shape;
    size?: Size;
};

type ButtonProps = RootStyleProps & {
    children: string;
    className?: string;
    isLoading?: boolean;
    type?: Type;
};

export type { Kind, RootStyleProps, Shape, Size, ButtonProps };
