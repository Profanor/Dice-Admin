import { TIconPack } from "../../../public/assets/Icons/index";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Icon, { IconProps } from "../Icons/Icon";
import {
  baseVariants,
  equalSizes,
  iconSizes,
  loaderSizes,
} from "./baseVariants";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  leftIcon?: TIconPack;
  rightIcon?: TIconPack;
  leftIconProps?: Omit<IconProps, "name">;
  rightIconProps?: Omit<IconProps, "name">;
  isLoading?: boolean;
  buttonStyle?: string;
  shape?: "rounded" | "square" | "pill" | "icon";
  size?: "xs" | "sm" | "base" | "md" | "lg";
};

const BaseButton: FC<BaseButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  leftIconProps,
  rightIconProps,
  isLoading,
  disabled,
  className = "",
  buttonStyle = "",
  shape = "pill",
  size = "base",
  ...props
}) => {
  const isDisabled = isLoading || disabled;

  const shapeClassName = baseVariants.shape[shape];
  const sizeClassName =
    shape === "icon" ? equalSizes[size] : baseVariants.size[size];
  const loaderSizeClassName = loaderSizes[size];

  const iconSize = iconSizes[size];

  return (
    <button
      aria-busy={isLoading}
      aria-disabled={isDisabled}
      className={buttonStyle}
      disabled={isDisabled}
      type="button"
      {...props}
    >
      <div
        className={`flex items-center justify-center gap-2 ${shapeClassName} ${sizeClassName} ${className}`}
      >
        {isLoading ? (
          <span
            aria-label="Loading"
            className={`loading loading-dots ${loaderSizeClassName}`}
          />
        ) : (
          <>
            {leftIcon && (
              <Icon name={leftIcon} size={iconSize} {...leftIconProps} />
            )}
            {children}
            {rightIcon && (
              <Icon name={rightIcon} size={iconSize} {...rightIconProps} />
            )}
          </>
        )}
      </div>
    </button>
  );
};

export default BaseButton;
