import React from "react";
import { useTableOfContent } from "../hooks/useTableOfContent";

type Props = {
  deps?: unknown;
  selectors?: string;
};

export const TableOfContent: React.FC<Props> = ({
  deps,
  selectors = "h1,h2,h3,h4,h5,h6",
}) => {
  const { headingLinks, contentIsActive } = useTableOfContent({
    deps,
    selectors,
  });
  if (!headingLinks || headingLinks.length < 1) return null;

  return (
    <div>
      <h4 id="on-this-page" data-testid="on-this-page">
        ON THIS PAGE
      </h4>
      <ul className="mt-4 space-y-2">
        {headingLinks.map((link) => {
          const isActive = contentIsActive(link.id);

          return (
            <li key={link.id}>
              <a
                data-testid={`toc-${link.id}`}
                className={`${isActive ? "active" : "inactive"}
                ${
                  ["h3", "h4"].includes(link.tagName.toLowerCase())
                    ? "pl-2"
                    : ""
                }
                ${
                  ["h5", "h6"].includes(link.tagName.toLowerCase())
                    ? "pl-4"
                    : ""
                }
                hover:text-gray-700 transition-colors duration-200
                `}
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
