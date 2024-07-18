import React from "react";
import { TableOfContent } from "./TableOfContent";

export const Example: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-10 w-64">
        <div className="sticky top-8">
          <div className="mb-2">
            <img className="w-8 h-8" src="/public/favicon.png" alt="logo" />
          </div>
          <TableOfContent />
        </div>
      </div>
      <article className="flex-1">
        <div className="container max-w-screen-xl">
          <section>
            <h1 id="first-heading">H1 heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
          <section>
            <h2 id="second-heading">H2 heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
          <section>
            <h3 id="third-heading">H3 heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
          <section>
            <h4 id="fourth-heading">H4 heading</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
          <section>
            <h5 id="fifth-heading">H5 heading</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
          <section>
            <h6 id="sixth-heading">H6 heading</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero accusamus alias cumque numquam atque eius ullam nobis at!
              Necessitatibus, corporis earum? Quidem, corporis blanditiis
              sapiente veritatis saepe debitis expedita!.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};
