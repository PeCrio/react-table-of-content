import { useState, useEffect } from "react";

export type HeadingLink = {
  title: string;
  id: string;
  tagName: string;
};

type Options = {
  selectors?: string;
  deps?: unknown;
};

export const useTableOfContent = (options?: Options) => {
  const { selectors = "h1, h2, h3", deps } = options || {};
  const [headingLinks, setHeadingLinks] = useState<HeadingLink[]>([]);
  const [intersectingHeadings, setIntersectingHeadings] = useState<string[]>(
    []
  );
  const [lastActiveHeadingId, setLastActiveHeadingId] = useState("");

  useEffect(() => {
    setIntersectingHeadings([]);
    const headingsToObserve = document.querySelectorAll(selectors);

    setHeadingLinks(
      Array.from(headingsToObserve).map((heading) => ({
        title: heading.textContent ?? "",
        id: heading.id ?? "",
        tagName: heading.tagName,
      }))
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setIntersectingHeadings((prevValue) => [...prevValue, id]);
          setLastActiveHeadingId(id);
        } else {
          setIntersectingHeadings((prevValue) =>
            prevValue.filter((headingId) => headingId !== id)
          );
        }
      });
    });

    headingsToObserve.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [deps]);

  const sortedActiveHeadings = intersectingHeadings.sort((a, b) => {
    return (
      headingLinks.findIndex((link) => link.id === a) -
      headingLinks.findIndex((link) => link.id === b)
    );
  });

  const contentIsActive = (headingId: string) => {
    let isActive = sortedActiveHeadings[0] === headingId;

    if (sortedActiveHeadings.length === 0) {
      isActive = lastActiveHeadingId === headingId;
    }
    return isActive;
  };

  return {
    headingLinks,
    contentIsActive,
  };
};
