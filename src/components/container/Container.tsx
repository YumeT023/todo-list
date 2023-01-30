import { HTMLAttributes } from "react";

export type ContainerProps = Partial<
  HTMLAttributes<HTMLDivElement> & {
    p: string;
    m: string;
  }
>;

export const Container = ({
  children,
  p: padding,
  m: margin,
  style,
  ...rest
}: Partial<ContainerProps>) => {
  return (
    <div {...rest} style={{ ...style, padding, margin }}>
      {children}
    </div>
  );
};
