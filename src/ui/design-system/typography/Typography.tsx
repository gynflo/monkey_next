import React from "react";
import clsx from "clsx";

interface TypographyProps {
  children: React.ReactNode;
  theme?:
    | "black"
    | "gray"
    | "white"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success";
  weight?: "regular" | "medium";
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
}

/**
 * DEFAULT VALUES
 * @param {string} variant - h3
 * @param {string} component - div
 * @param {string} theme - black
 * @param {string} weight - regular 400
 *
 */

const Typography = ({
  variant = "h3",
  children,
  theme = "black",
  weight = "regular",
  className,
  component: Component = "div",
}: TypographyProps) => {
  let variantStyles: string = "";
  let colorStyles: string = "";

  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      break;
    case "h1":
      variantStyles = "text-7xl";
      break;
    case "h2":
      variantStyles = "text-6xl";
      break;
    case "h3":
      variantStyles = "text-5xl";
      break;
    case "h4":
      variantStyles = "text-3xl";
      break;
    case "h5":
      variantStyles = "text-2xl";
      break;
    case "lead":
      variantStyles = "text-xl";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    case "danger":
      colorStyles = "text-alert-danger";
      break;
    case "warning":
      colorStyles = "text-alert-warning";
      break;
    case "success":
      colorStyles = "text-alert-success";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        className,
        colorStyles,
        weight === "medium" && "font-medium"
      )}
    >
      {children}
    </Component>
  );
};
export default Typography;
