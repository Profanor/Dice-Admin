import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type EditIconProps = Partial<SVGIconProps>;

const EditIcon: FC<EditIconProps> = (props) => (
  <SVGIcon viewBox="0 0 19 18" {...props}>
    <path
      d="M9.61301 2.4008L4.13968 8.19413C3.93301 8.41413 3.73301 8.84746 3.69301 9.14746L3.44635 11.3075C3.35968 12.0875 3.91968 12.6208 4.69301 12.4875L6.83968 12.1208C7.13968 12.0675 7.55968 11.8475 7.76635 11.6208L13.2397 5.82746C14.1863 4.82746 14.613 3.68746 13.1397 2.29413C11.673 0.914129 10.5597 1.4008 9.61301 2.4008Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.11083"
    />
    <path
      d="M8.69531 3.36719C8.98198 5.20719 10.4753 6.61385 12.3286 6.80052"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.25"
    />
    <path
      d="M2.76953 14.668H14.7695"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.25"
    />
  </SVGIcon>
);

export default EditIcon;
