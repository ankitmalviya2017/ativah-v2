import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

interface BreadcrumbsProps {
  segments: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ segments }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={href}>
              <li>
                <ChevronRight className="w-4 h-4 mx-1" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-semibold text-gray-900 capitalize">
                    {segment.replace(/-/g, " ")}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-black capitalize transition-colors"
                  >
                    {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
