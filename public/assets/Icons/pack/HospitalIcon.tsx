import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type HospitalIconProps = Partial<SVGIconProps>;

const HospitalIcon: FC<HospitalIconProps> = ({
  color = "currentColor",
  ...props
}) => (
  <SVGIcon stroke={color} viewBox="0 0 142 142" {...props}>
    <path
      d="M11.833 130.16h118.334"
      strokeLinecap="round"
      strokeWidth="5.917"
    />
    <g strokeWidth="8.875">
      <path d="M100.583 11.827H41.417c-17.75 0-23.667 10.591-23.667 23.667v94.667h106.5V35.494c0-13.076-5.917-23.667-23.667-23.667z" />
      <path d="M83.188 88.744H58.752c-3.017 0-5.562 2.485-5.562 5.562v35.855h35.5V94.305c.059-3.077-2.426-5.562-5.503-5.562z" />
      <g strokeLinecap="round">
        <path d="M71 35.494v29.583" />
        <path d="M56.208 50.285h29.583" />
      </g>
    </g>
  </SVGIcon>
);

export default HospitalIcon;
