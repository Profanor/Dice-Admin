import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type PlusIconProps = Partial<SVGIconProps>;

const PlusIcon: FC<PlusIconProps> = (props) => (
  <SVGIcon viewBox="0 0 25 24" {...props}>
    <path
      d="M20.25 12a.75.75 0 0 1-.75.75h-6.25V19a.75.75 0 1 1-1.5 0v-6.25H5.5a.75.75 0 1 1 0-1.5h6.25V5a.75.75 0 1 1 1.5 0v6.25h6.25a.75.75 0 0 1 .75.75z"
      fill="currentColor"
    />
  </SVGIcon>
);

export default PlusIcon;
