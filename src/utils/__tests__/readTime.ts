import { readTime } from "../readTime";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

describe("readTime", () => {
  test("should return an object with minutes and readTime for short content", () => {
    const content = loremIpsum;
    const result = readTime(content);
    expect(result).toEqual({ minutes: 1, readTime: "1 min read" });
  });

  test("should return an object with minutes and readTime for long content", () => {
    const content = loremIpsum.repeat(10);
    const result = readTime(content);
    expect(result).toEqual({ minutes: 3, readTime: "3 min read" });
  });

  test("should return an object with minutes and readTime for content with images", () => {
    const content = `<p>${loremIpsum.repeat(10)}</p>
        <img src="https://example.com/image.jpg" alt="Image" />
        `;
    const result = readTime(content);
    expect(result).toEqual({ minutes: 3, readTime: "3 min read" });
  });
});
