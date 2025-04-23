import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type ChatIconProps = Partial<SVGIconProps>;

const ChatIcon: FC<ChatIconProps> = (props) => (
  <SVGIcon viewBox="0 0 25 24" {...props}>
    <path
      d="M8.301 10h8m-8 4h4m-1-11h2a9 9 0 1 1 0 18h-7a4 4 0 0 1-4-4v-5a9 9 0 0 1 9-9z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </SVGIcon>
);

export default ChatIcon;
