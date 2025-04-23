import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type WeightIconProps = Partial<SVGIconProps>;

const WeightIcon: FC<WeightIconProps> = (props) => (
  <SVGIcon viewBox="0 0 21 20" {...props}>
    <path
      d="M13.333 1.927H6.667c-2.5 0-4.167 1.667-4.167 4.167v8.333c0 2.5 1.667 4.167 4.167 4.167h6.667c2.5 0 4.167-1.667 4.167-4.167V6.094c0-2.5-1.667-4.167-4.167-4.167zm1.308 5.4l-1.817 2.917c-.05.075-.133.133-.217.142h-.042a.32.32 0 0 1-.208-.075c-1.342-1.192-3.358-1.192-4.7 0-.067.058-.158.092-.25.075s-.175-.067-.217-.142L5.375 7.327c-.1-.125-.075-.292.042-.4 2.608-2.325 6.55-2.325 9.167 0 .117.108.142.275.058.4z"
      fill="currentColor"
    />
  </SVGIcon>
);

export default WeightIcon;
