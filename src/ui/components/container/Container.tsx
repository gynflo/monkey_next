import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("w-full max-w-7xl mx-auto px-5 lg:px-10", className)}>
      {children}
    </div>
  );
};

export default Container;
