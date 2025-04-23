import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type ChatIconProps = Partial<SVGIconProps>;

const ChatIcon: FC<ChatIconProps> = (props) => (
  <SVGIcon viewBox="0 0 33 32" {...props}>
    <mask fill="#fff" id="KemChatIconA">
      <path
        d="M6.39 22.355A7.92 7.92 0 0 1 9.464 7.14h14.075a7.92 7.92 0 0 1 7.917 7.917 7.92 7.92 0 0 1-7.917 7.917h-9.019l-4.64 4.009c-1.386 1.197-3.493.178-3.493-1.69l.001-2.938z"
        fillRule="evenodd"
      />
    </mask>
    <g fill="currentColor">
      <path
        d="M6.39 22.355h1v-.664l-.612-.258-.389.921zm8.131.619v-1h-.372l-.282.243.654.757zm-4.64 4.009l.654.757-.654-.757zm-3.493-1.69h-1 1zM.547 15.057a8.92 8.92 0 0 0 5.454 8.22l.777-1.843a6.92 6.92 0 0 1-4.231-6.377h-2zM9.464 6.14a8.92 8.92 0 0 0-8.917 8.917h2A6.92 6.92 0 0 1 9.464 8.14v-2zm14.075 0H9.464v2h14.075v-2zm8.917 8.917a8.92 8.92 0 0 0-8.917-8.917v2a6.92 6.92 0 0 1 6.917 6.917h2zm-8.917 8.917a8.92 8.92 0 0 0 8.917-8.917h-2a6.92 6.92 0 0 1-6.917 6.917v2zm-9.019 0h9.019v-2h-9.019v2zm-3.986 3.765l4.64-4.009-1.308-1.513-4.64 4.009 1.308 1.513zm-5.146-2.447c-.001 2.655 3.061 4.249 5.146 2.447l-1.308-1.513c-.686.593-1.839.147-1.839-.933h-2zm.001-2.938l-.001 2.938h2l.001-2.938-2-.001z"
        mask="url(#KemChatIconA)"
      />
      <rect height="5.28" rx="2.64" width="5.28" x="6.828" y="12.418" />
      <rect height="5.28" rx="2.64" width="5.28" x="13.828" y="12.418" />
      <rect height="5.28" rx="2.64" width="5.28" x="20.898" y="12.418" />
    </g>
    <path d="M16.5 4.5v3.24" stroke="currentColor" strokeLinecap="round" />
  </SVGIcon>
);

export default ChatIcon;
