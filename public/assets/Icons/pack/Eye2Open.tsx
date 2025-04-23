import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type Eye2OpenIconProps = Partial<SVGIconProps>;

const Eye2OpenIcon: FC<Eye2OpenIconProps> = (props) => (
  <SVGIcon viewBox="0 0 24 25" {...props}>
    <path
      d="M15.58 12.2605C15.58 14.2405 13.98 15.8405 12 15.8405C10.02 15.8405 8.42001 14.2405 8.42001 12.2605C8.42001 10.2805 10.02 8.68048 12 8.68048C13.98 8.68048 15.58 10.2805 15.58 12.2605Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M12 20.5305C15.53 20.5305 18.82 18.4505 21.11 14.8505C22.01 13.4405 22.01 11.0705 21.11 9.66047C18.82 6.06047 15.53 3.98047 12 3.98047C8.47 3.98047 5.18 6.06047 2.89 9.66047C1.99 11.0705 1.99 13.4405 2.89 14.8505C5.18 18.4505 8.47 20.5305 12 20.5305Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SVGIcon>
);

export default Eye2OpenIcon;
