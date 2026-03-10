import React from "react";
import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={clsx(
        "mb-12",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg uppercase tracking-widest max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
