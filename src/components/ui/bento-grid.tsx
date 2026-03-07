import { cn } from "@/utils/cn";
import { GlowingEffect } from "./glowing-effect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto",
        className
      )}
      style={{ gridAutoFlow: "dense" }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("relative h-full rounded-2xl border p-2 dark:border-gray-800 border-gray-200 bg-white dark:bg-black group/bento", className)}
    >
      <GlowingEffect
        spread={40}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
        disabled={false}
      />
      <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-2 dark:bg-black bg-white">
        <div className="relative z-10">
          {header}
        </div>
        <div className="relative z-10">
          {icon}
          <div className="font-sans font-bold text-gray-800 dark:text-gray-100 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-gray-600 dark:text-gray-300 text-xs">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
