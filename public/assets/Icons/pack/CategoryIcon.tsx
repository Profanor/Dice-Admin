import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type CategoryIconProps = Partial<SVGIconProps>;

const CategoryIcon: FC<CategoryIconProps> = ({
  color = "currentColor",
  ...props
}) => (
  <SVGIcon stroke={color} strokeWidth="1.5" viewBox="0 0 25 24" {...props}>
    <path d="M5.5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zm12 0h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zm0 12h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zm-12 0h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3z" />
  </SVGIcon>
);

export default CategoryIcon;
