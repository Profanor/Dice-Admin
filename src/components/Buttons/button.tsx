import { FC } from "react";
import BaseButton, { BaseButtonProps } from "./baseButton";
import variants from "./variants";

export type ButtonProps = BaseButtonProps & {
  intent?: "solid" | "outline" | "ghost";
  variant?: "primary" | "danger" | "warning" | "secondary";
};

const Button: FC<ButtonProps> = ({
  intent = "solid",
  variant = "primary",
  className = "",
  disabled,
  leftIconProps,
  rightIconProps,
  ...props
}) => {
  const state = disabled ? "disabled" : "enabled";
  const buttonClassName = variants[variant][intent][state].button;
  const iconColor = variants[variant][intent][state].icon;

  return (
    <BaseButton
      className={`w-full transition-all active:scale-95 hover:opacity-95 ${buttonClassName} ${className}`}
      disabled={disabled}
      buttonStyle={"w-full"}
      leftIconProps={{
        color: iconColor,
        ...leftIconProps,
      }}
      rightIconProps={{
        color: iconColor,
        ...rightIconProps,
      }}
      {...props}
    />
  );
};

export default Button;
