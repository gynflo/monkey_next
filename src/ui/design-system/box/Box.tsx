import clsx from "clsx";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={clsx("w-full border border-gray-400 rounded p-9", className)}>
      {children}
    </div>
  );
};

export default Box;
