import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type BloodBagIconProps = Partial<SVGIconProps>;

const BloodBagIcon: FC<BloodBagIconProps> = (props) => (
  <SVGIcon viewBox="0 0 21 20" {...props}>
    <path
      d="M12.5 15.677h0l.89-.038a2 2 0 0 0 1.571-1.571c.038-.193.038-.425.038-.89V5.845l-.01-.448a2 2 0 0 0-1.793-1.793c-.098-.01-.215-.01-.448-.01h-.341a1.54 1.54 0 0 1-1.204-.579h0c-.617-.771-1.79-.771-2.408 0h0a1.54 1.54 0 0 1-1.204.579h-.341l-.448.01A2 2 0 0 0 5.01 5.397C5 5.495 5 5.612 5 5.845v7.332l.038.89a2 2 0 0 0 1.571 1.571c.193.038.426.038.89.038h0m5 0v.625c0 .238-.001.487-.257.593-.077.032-.174.032-.368.032h-3.75c-.194 0-.291 0-.368-.032-.256-.106-.257-.356-.257-.593v-.625m5 0h-5"
      stroke="currentColor"
    />
    <path
      d="M10 18.177v-1.25m-5-4.166c1.739.425 2.845.425 4.583 0 1.204-.294 1.68-1.323 2.917-1.25 1.09.064 1.667 1.25 2.5 1.25"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </SVGIcon>
);

export default BloodBagIcon;
