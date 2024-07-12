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
