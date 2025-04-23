import { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type ChevronRightIconProps = Partial<SVGIconProps>;

const ChevronRightIcon: FC<ChevronRightIconProps> = (props) => (
  <svg
    fill="none"
    height={32}
    width={32}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      fill={props?.fill || "#1e7ad3"}
      height={31}
      rx={15.5}
      width={31}
      x={0.5}
      y={0.5}
    />
    <rect
      height={31}
      rx={15.5}
      stroke={props?.stroke || "#1e7ad3"}
      width={31}
      x={0.5}
      y={0.5}
    />
    <path
      d="m14.5 19.75 3-3.75-3-3.75"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export default ChevronRightIcon;
