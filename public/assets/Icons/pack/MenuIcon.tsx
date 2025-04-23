import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type MenuIconProps = Partial<SVGIconProps>;

const MenuIcon: FC<MenuIconProps> = (props) => (
  <SVGIcon fill="currentColor" viewBox="0 0 25 24" {...props}>
    <path d="M3.996 12.001a1 1 0 0 1 1-1l14-.001a1 1 0 1 1 0 2l-14 .001a1 1 0 0 1-1-1zm0-5a1 1 0 0 1 1-1l14-.001a1 1 0 1 1 0 2l-14 .001a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1z" />
  </SVGIcon>
);

export default MenuIcon;
