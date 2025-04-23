import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type EyeOpenIconProps = Partial<SVGIconProps>;

const EyeOpenIcon: FC<EyeOpenIconProps> = (props) => (
  <SVGIcon viewBox="0 0 143 142" {...props}>
    <path
      d="M71.402 11.827V23.66m53.25 5.917l-8.875 8.875m-97.625-8.875l8.875 8.875m44.375 91.708c21.325 0 40.312-13.877 52.523-25.566 8.858-8.479 8.858-23.221 0-31.7-12.211-11.689-31.198-25.567-52.523-25.567S31.09 61.205 18.879 72.894c-8.858 8.479-8.858 23.221 0 31.7 12.211 11.689 31.199 25.566 52.523 25.566zm17.75-41.416c0 9.803-7.947 17.751-17.75 17.751s-17.75-7.947-17.75-17.751 7.947-17.75 17.75-17.75 17.75 7.947 17.75 17.75z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="8.875"
    />
  </SVGIcon>
);

export default EyeOpenIcon;
