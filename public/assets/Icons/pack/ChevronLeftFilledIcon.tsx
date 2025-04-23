import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type ChevronLeftFilledIconProps = Partial<SVGIconProps>;

const ChevronLeftFilledIcon: FC<ChevronLeftFilledIconProps> = (props) => (
  <SVGIcon viewBox="0 0 41 40" {...props}>
    <circle cx="20.5" cy="20" fill="#f5f5f9" r="20" />
    <circle cx="20.5" cy="20" fill="#1e7ad3" r="13" />
    <path
      d="M22.393 14l-6.183 6 6.183 6 1.532-1.487L19.275 20l4.651-4.513L22.393 14z"
      fill="#fff"
      fillRule="evenodd"
    />
  </SVGIcon>
);

export default ChevronLeftFilledIcon;
