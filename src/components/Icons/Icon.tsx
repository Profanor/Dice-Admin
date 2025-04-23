import { FC } from "react";

import { iconPack, TIconPack } from "../../../public/assets/Icons/index";
import { SVGIconProps } from "./SVGIcon";

export interface IconProps {
  color?: SVGIconProps["color"];

  /**
   * The name of the icon from the icon pack.
   */
  name: TIconPack;

  /**
   * The size of the icon which will be used as the width and height
   */
  size?: number | string;
}

const Icon: FC<IconProps> = ({ name, size, ...props }) => {
  const IconFromPack = iconPack[name];

  return <IconFromPack height={size} width={size} {...props} />;
};

export default Icon;
