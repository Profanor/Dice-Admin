import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";

type StatusIndicatorIconProps = Partial<SVGIconProps>;
const StatusIndicatorIcon = ({ fill, stroke }: StatusIndicatorIconProps) => {
  return (
    <SVGIcon height="10" viewBox="0 0 10 10" width="10">
      <rect
        fill={fill || "currentColor"}
        height="6"
        rx="3"
        width="6"
        x="2"
        y="2"
      />
      <rect
        height="8"
        rx="4"
        stroke={stroke || "currentColor"}
        strokeOpacity="0.15"
        strokeWidth="2"
        width="8"
        x="1"
        y="1"
      />
    </SVGIcon>
  );
};

export default StatusIndicatorIcon;
