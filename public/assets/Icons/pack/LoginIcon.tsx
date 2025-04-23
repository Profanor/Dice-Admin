import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type LoginIconProps = Partial<SVGIconProps>;

const LoginIcon: FC<LoginIconProps> = (props) => (
  <SVGIcon stroke="currentColor" viewBox="0 0 25 24" {...props}>
    <path d="M9.398 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2.5 12h12.88m-2.232-3.35l3.35 3.35-3.35 3.35" />
  </SVGIcon>
);

export default LoginIcon;
