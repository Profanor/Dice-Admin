import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type RadarIconProps = Partial<SVGIconProps>;

const RadarIcon: FC<RadarIconProps> = (props) => (
  <SVGIcon viewBox="0 0 25 24" {...props}>
    <g id="vuesax/linear/radar-2">
      <g id="radar-2">
        <path
          d="M6.5 4C8.17 2.75 10.25 2 12.5 2C18.02 2 22.5 6.48 22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 10.19 2.97999 8.48999 3.82999 7.01999L12.5 12"
          id="Vector"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M7.32999 8.95999C6.79999 9.84999 6.5 10.89 6.5 12C6.5 15.31 9.19 18 12.5 18C15.81 18 18.5 15.31 18.5 12C18.5 8.69 15.81 6 12.5 6C11.59 6 10.72 6.20001 9.95001 6.57001"
          id="Vector_2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
    </g>
  </SVGIcon>
);

export default RadarIcon;
