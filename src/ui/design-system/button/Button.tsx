"use client";

import clsx from "clsx";

import type { IconProps } from "@/types";
import Spinner from "../spinner/Spinner";
import { LinkType, LinkTypes } from "@/lib/linkType";
import ActiveLink from "@/ui/components/navigation/ActiveLink";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "success" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: () => void;
  type?: "button" | "submit";
  fullwidth?: boolean;
}

/**
 *  DEFAULT VALUE
 * @param {string} variant - accent
 * @param {string} size - medium
 * @param {string} iconTheme - accent
 * @param {string} iconPosition - right
 * @param {string} linkType - internal
 * @param {string} type - button
 * @param {string} fullwidth - false
 *
 */

const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  type = "button",
  fullwidth = false,
  action = () => {},
}: ButtonProps) => {
  let variantStyles: string = "";
  let sizeStyles: string = "";
  let icoSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles = "text-white bg-primary hover:bg-primary-400 rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "success":
      variantStyles = "text-white bg-secondary hover:bg-secondary-400 rounded";
      break;
    case "outline":
      variantStyles =
        "text-gray bg-white hover:bg-gray-400/50 rounded border border-gray-500";
      break;
    case "disabled":
      variantStyles =
        "text-gray-600 bg-gray-400 border border-gray-500 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "text-white bg-primary hover:bg-primary-400 rounded-full";
      } else if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      } else {
        variantStyles =
          "text-white bg-gray-800 hover:bg-gray-700 rounded-full ";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "h-[40px] w-[40px] flex items-center justify-center"
          : "py-[11px] px-[14px]"
      }`;
      icoSize = 18;
      break;
    case "medium":
      sizeStyles = `text-caption2 font-medium  ${
        variant === "ico"
          ? "h-[50px] w-[50px] flex items-center justify-center"
          : "py-[15px] px-[18px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? " h-[60px] w-[60px] flex items-center justify-center"
          : "py-[18px] px-[22px]"
      }`;
      icoSize = 24;
      break;
  }

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-2")}>
            {icon && iconPosition === "left" && (
              <>
                <icon.icon size={icoSize} />
              </>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <>
                <icon.icon size={icoSize}></icon.icon>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );

  function handleClick() {
    if (action) {
      action();
    }
  }

  const buttonElmt = (
    <button
      type={type}
      className={clsx(
        "relative animate",
        variantStyles,
        sizeStyles,
        icoSize,
        isLoading && "cursor-not-allowed",
        fullwidth && "w-full"
      )}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElmt}
        </a>
      );
    }

    return <ActiveLink href={baseUrl}>{buttonElmt}</ActiveLink>;
  }

  return buttonElmt;
};

export default Button;
