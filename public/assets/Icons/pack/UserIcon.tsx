import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type UserIconProps = Partial<SVGIconProps>;

const UserIcon: FC<UserIconProps> = (props) => (
  <SVGIcon viewBox="0 0 19 18" {...props}>
    <path
      d="M9.496 10.474c2.035 0 3.684-1.649 3.684-3.684s-1.649-3.684-3.684-3.684-3.684 1.649-3.684 3.684 1.649 3.684 3.684 3.684zm0 0c-3.256 0-5.895 1.979-5.895 4.421m5.895-4.421c3.256 0 5.895 1.979 5.895 4.421"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.895"
    />
  </SVGIcon>
);

export default UserIcon;
