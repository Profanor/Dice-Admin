import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type NavigationIconProps = Partial<SVGIconProps>;

const NavigationIcon: FC<NavigationIconProps> = (props) => (
  <SVGIcon viewBox="0 0 25 24" {...props}>
    <path
      d="M17.341 10.128C16.6 8.294 14.803 7 12.703 7a5 5 0 0 0-5 5c0 2.1 1.294 3.897 3.128 4.638M12.619 22c-5.484-.045-9.916-4.505-9.916-10 0-5.523 4.477-10 10-10 5.495 0 9.954 4.432 10 9.916m-9.942 1.508l2.613 7.838c.328.985 1.721.985 2.049 0l.965-2.894a1.08 1.08 0 0 1 .683-.683l2.894-.965c.985-.328.985-1.721 0-2.049l-7.838-2.613a1.08 1.08 0 0 0-1.366 1.366z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SVGIcon>
);

export default NavigationIcon;
