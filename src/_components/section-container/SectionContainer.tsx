import React from "react";
import clsx from "clsx";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({
  children,
  className,
  id,
}: SectionContainerProps) => {
  return (
    <section id={id} className={clsx("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};
