import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";

type DownloadIconProps = Partial<SVGIconProps>;
const DownloadIcon = ({ stroke }: DownloadIconProps) => {
  return (
    <SVGIcon height="20" viewBox="0 0 21 20" width="21">
      <path
        d="M8.26758 9.73242L10.4009 11.8658L12.5342 9.73242"
        stroke={stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        d="M10.4004 3.33398V11.809"
        stroke={stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        d="M17.1673 10.1504C17.1673 13.8337 14.6673 16.8171 10.5007 16.8171C6.33398 16.8171 3.83398 13.8337 3.83398 10.1504"
        stroke={stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </SVGIcon>
  );
};

export default DownloadIcon;
