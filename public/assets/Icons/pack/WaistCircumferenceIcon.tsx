import SVGIcon, { SVGIconProps } from "@dice/components/Icons/SVGIcon";
import { FC } from "react";

type WaistCircumferenceIconProps = Partial<SVGIconProps>;

const WaistCircumferenceIcon: FC<WaistCircumferenceIconProps> = (props) => (
  <SVGIcon viewBox="0 0 21 20" {...props}>
    <path
      d="M7.813 3.073a2.19 2.19 0 0 1 1.35-2.021 2.19 2.19 0 0 1 1.264-.124c.424.084.814.293 1.12.599a2.19 2.19 0 0 1 .599 1.12c.084.424.041.864-.124 1.264a2.19 2.19 0 0 1-.806.982c-.36.24-.783.369-1.215.369a2.19 2.19 0 0 1-2.187-2.188zm9.969 4.42c-.057-.28-.21-.531-.432-.711s-.501-.275-.786-.271H3.438a1.25 1.25 0 0 0-1.221.982 1.25 1.25 0 0 0 .698 1.403h.005l4.21 1.854-1.713 6.508a1.25 1.25 0 0 0 .617 1.634c.165.078.346.119.529.12a1.25 1.25 0 0 0 1.128-.708L10 14.323l2.311 3.984a1.25 1.25 0 0 0 1.643.584 1.25 1.25 0 0 0 .628-1.628l-1.713-6.508L17.088 8.9c.262-.117.474-.321.601-.579s.159-.551.092-.829z"
      fill="currentColor"
    />
  </SVGIcon>
);

export default WaistCircumferenceIcon;
