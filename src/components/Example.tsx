import React, { createElement } from "react";
import { TableOfContent } from "./TableOfContent";

const Article = () => {
  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const dummyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero accusamus alias cumque numquam atque eius ullam nobis at! Necessitatibus, corporis earum? Quidem, corporis blanditiis sapiente veritatis saepe debitis expedita!.";
  return (
    <article>
      <div className="container max-w-screen-xl">
        {headingTags.map((tag, index) => {
          const headingElement = createElement(
            tag,
            { key: index, id: `${tag}-heading` },
            `${tag.toUpperCase()} heading`
          );
          return (
            <section key={index}>
              {headingElement}
              {/* Returns something like this: <h1 id={`${tag}-heading`}>{tag.toUpperCase()} heading</h1> */}
              <p>{dummyText}</p>
            </section>
          );
        })}
      </div>
    </article>
  );
};

export const Example: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-10 w-64">
        <div className="sticky top-8">
          <div className="mb-2">
            <img className="w-8 h-8" src="/favicon.png" alt="logo" />
          </div>
          <TableOfContent />
        </div>
      </div>
      <div className="flex-1">
        <Article />
      </div>
    </div>
  );
};
