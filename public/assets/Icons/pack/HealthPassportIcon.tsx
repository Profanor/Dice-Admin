import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type HealthPassportIconProps = Partial<SVGIconProps>;
const HealthPassportIcon: FC<HealthPassportIconProps> = (props) => {
  return (
    <SVGIcon
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M11.96 29.333h8c6.667 0 9.333-2.667 9.333-9.333v-8c0-6.667-2.667-9.333-9.333-9.333h-8c-6.667 0-9.333 2.667-9.333 9.333v8c0 6.667 2.667 9.333 9.333 9.333z" />
      <path
        d="M2.627 16.933l8-.027c1 0 2.12.76 2.493 1.693l1.52 3.84c.347.867.893.867 1.24 0l3.053-7.747c.293-.747.84-.773 1.213-.067l1.387 2.627c.413.787 1.48 1.427 2.36 1.427h5.413"
        strokeLinecap="round"
      />
    </SVGIcon>
  );
};

export default HealthPassportIcon;
