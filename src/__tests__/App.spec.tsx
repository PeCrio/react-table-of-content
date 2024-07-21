import { act, render, screen } from "@testing-library/react";
import { TableOfContent } from "../components/TableOfContent";
import { useState } from "react";

describe("App", () => {
  const observe = jest.fn();
  const disconnect = jest.fn();

  (window.IntersectionObserver as jest.Mock) = jest.fn(() => ({
    observe,
    disconnect,
  }));

  test("should render nothing if no heading exists", () => {
    render(<TableOfContent />);
    expect(screen.queryByTestId("on-this-page")).not.toBeInTheDocument();
  });

  test("should target the right selectors", async () => {
    render(
      <>
        <article>
          <h1 id="h1-heading">H1 heading</h1>
          <h2 id="h2-heading">H2 heading</h2>
          <h3 id="h3-heading">H3 heading</h3>
          <h4 id="h4-heading">H4 heading</h4>
          <h5 id="h5-heading">H5 heading</h5>
          <h6 id="h6-heading">H6 heading</h6>
        </article>
        <TableOfContent selectors="h1, h2" />
      </>
    );
    expect(screen.getByTestId("on-this-page")).toBeInTheDocument();

    const tocHeading1 = screen.getByTestId("toc-h1-heading");
    const tocHeading2 = screen.getByTestId("toc-h2-heading");
    const tocHeading3 = screen.queryByTestId("toc-h3-heading");
    const tocHeading4 = screen.queryByTestId("toc-h4-heading");
    const tocHeading5 = screen.queryByTestId("toc-h5-heading");
    const tocHeading6 = screen.queryByTestId("toc-h6-heading");

    expect(tocHeading1).toBeInTheDocument();
    expect(tocHeading2).toBeInTheDocument();
    expect(tocHeading3).not.toBeInTheDocument();
    expect(tocHeading4).not.toBeInTheDocument();
    expect(tocHeading5).not.toBeInTheDocument();
    expect(tocHeading6).not.toBeInTheDocument();
  });

  test("should re-render table of content when dependency changes", () => {
    const TestComponent = () => {
      const [dep, setDep] = useState("default");

      const handleDepUpdate = () => {
        setDep("updated");
      };

      return (
        <>
          <button onClick={handleDepUpdate} data-testid="change-dep">
            Change dep
          </button>
          <article>
            <h1 id="h1-heading">H1 heading</h1>
            <h2 id={`h2-heading-${dep}`}>H2 heading {dep}</h2>
          </article>
          <TableOfContent selectors="h1, h2" deps={dep} />
        </>
      );
    };

    render(<TestComponent />);

    const heading1 = screen.getByTestId("toc-h1-heading");

    expect(heading1).toBeInTheDocument();
    expect(screen.getByTestId("toc-h2-heading-default")).toBeInTheDocument();

    act(() => {
      screen.getByTestId("change-dep").click();
    });

    expect(heading1).toBeInTheDocument();
    expect(
      screen.queryByTestId("toc-h2-heading-default")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toc-h2-heading-updated")).toBeInTheDocument();
    expect(screen.getByTestId("toc-h2-heading-updated")).toHaveTextContent(
      "H2 heading updated"
    );
  });
});
