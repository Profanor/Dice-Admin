import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type CalendarTickIconProps = Partial<SVGIconProps>;

const CalendarTickIcon: FC<CalendarTickIconProps> = (props) => (
  <SVGIcon viewBox="0 0 25 24" {...props}>
    <path
      d="M8.5 2V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M16.5 2V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M4 9.09009H21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M22.5 19C22.5 19.75 22.29 20.46 21.92 21.06C21.23 22.22 19.96 23 18.5 23C17.49 23 16.57 22.63 15.87 22C15.56 21.74 15.29 21.42 15.08 21.06C14.71 20.46 14.5 19.75 14.5 19C14.5 16.79 16.29 15 18.5 15C19.7 15 20.77 15.53 21.5 16.36C22.12 17.07 22.5 17.99 22.5 19Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M16.9414 19L17.9314 19.99L20.0614 18.02"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M21.5 8.5V16.36C20.77 15.53 19.7 15 18.5 15C16.29 15 14.5 16.79 14.5 19C14.5 19.75 14.71 20.46 15.08 21.06C15.29 21.42 15.56 21.74 15.87 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M12.4945 13.7H12.5035"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M8.79529 13.7H8.80427"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M8.79529 16.7H8.80427"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </SVGIcon>
);

export default CalendarTickIcon;
