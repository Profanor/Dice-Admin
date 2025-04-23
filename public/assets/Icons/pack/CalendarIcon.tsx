import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type CalendarIconProps = Partial<SVGIconProps>;

const CalendarIcon: FC<CalendarIconProps> = (props) => (
  <SVGIcon viewBox="0 0 19 18" {...props}>
    <path
      d="M2.738 6.75v6.75a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V6.75m-13.5 0V5.625a3 3 0 0 1 3-3h7.5a3 3 0 0 1 3 3V6.75m-13.5 0h13.5m-3.75-5.25v2.25m-6-2.25v2.25"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </SVGIcon>
);

export default CalendarIcon;
