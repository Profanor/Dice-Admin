import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type Eye2CloseIconProps = Partial<SVGIconProps>;

const Eye2CloseIcon: FC<Eye2CloseIconProps> = (props) => (
  <SVGIcon viewBox="0 0 24 25" {...props}>
    <path
      d="M14.53 9.73048L9.47001 14.7905C8.82001 14.1405 8.42001 13.2505 8.42001 12.2605C8.42001 10.2805 10.02 8.68048 12 8.68048C12.99 8.68048 13.88 9.08048 14.53 9.73048Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M17.82 6.03048C16.07 4.71048 14.07 3.99048 12 3.99048C8.47 3.99048 5.18 6.07048 2.89 9.67048C1.99 11.0805 1.99 13.4505 2.89 14.8605C3.68 16.1005 4.6 17.1705 5.6 18.0305"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M8.42001 19.7905C9.56001 20.2705 10.77 20.5305 12 20.5305C15.53 20.5305 18.82 18.4505 21.11 14.8505C22.01 13.4405 22.01 11.0705 21.11 9.66049C20.78 9.14049 20.42 8.65049 20.05 8.19049"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M15.51 12.9605C15.25 14.3705 14.1 15.5205 12.69 15.7805"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M9.47 14.7905L2 22.2605"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M22 2.2605L14.53 9.7305"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SVGIcon>
);

export default Eye2CloseIcon;
