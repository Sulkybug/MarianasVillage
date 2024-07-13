declare module "react-router-hash-link" {
  import { LinkProps } from "react-router-dom";
  import { Ref } from "react";

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    scroll?: (element: HTMLElement) => void;
    innerRef?: Ref<HTMLAnchorElement>;
  }

  export const HashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;

  export const NavHashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}

declare module "react-lazyload" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  interface LazyLoadProps {
    once?: boolean;
    height?: number | string;
    offset?: number | [number, number];
    overflow?: boolean;
    resize?: boolean;
    scroll?: boolean;
    children?: ReactNode;
    debounce?: boolean | number;
    throttle?: boolean | number;
    scrollContainer?: string | ComponentType<any>;
    unmountIfInvisible?: boolean;
    placeholder?: ReactNode;
    style?: CSSProperties;
    className?: string;
    /**
     * @deprecated Use 'scroll' instead.
     */
    scrollPosition?: number;
    preventLoading?: boolean;
  }

  const LazyLoad: ComponentType<LazyLoadProps>;

  export default LazyLoad;
}
