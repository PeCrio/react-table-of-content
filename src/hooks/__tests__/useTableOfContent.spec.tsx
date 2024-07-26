import { renderHook } from "@testing-library/react";
import { useTableOfContent } from "../useTableOfContent";

describe("useTableOfContent", () => {
  const observe = jest.fn();
  const disconnect = jest.fn();

  (window.IntersectionObserver as jest.Mock) = jest.fn(() => ({
    observe,
    disconnect,
  }));

  test("should return an empty array of heading links when no headings are present", () => {
    const { result } = renderHook(useTableOfContent);
    expect(result.current.headingLinks).toEqual([]);
  });

  test("should return false for contentIsActive when heading is not intersecting", () => {
    const { result } = renderHook(useTableOfContent);
    const headingId = "heading-2";
    expect(result.current.contentIsActive(headingId)).toBe(false);
  });

  test("should accept options", () => {
    const { result } = renderHook(useTableOfContent, {
      initialProps: { selectors: "h1, h2, h3", deps: "dependency" },
    });
    expect(result.current.headingLinks).toEqual([]);
  });
});
