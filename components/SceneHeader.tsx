import { forwardRef, type ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";

type Props = {
  icon: IconName;
  children: ReactNode;
  className?: string;
};

const SceneHeader = forwardRef<HTMLDivElement, Props>(function SceneHeader(
  { icon, children, className = "" },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`font-terminal text-lg tracking-widest uppercase inline-flex items-center gap-2 ${className}`}
      style={{ color: "var(--grid-cyan)" }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full anim-pulse"
        style={{ background: "var(--sun-pink)" }}
      />
      <Icon name={icon} size="1em" />
      {children}
    </div>
  );
});

export default SceneHeader;
