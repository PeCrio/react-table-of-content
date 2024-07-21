import { makeLinksExternal } from "../makeLinksExternal";

describe("makeLinksExternal", () => {
  test("should add target and rel attribute to anchor tags", () => {
    const html = `
<p>Content 1</p>
<a href="https://example.com">First link</a>
<p>Content 2</p>
<a href="https://example.com">Second link</a>
`;
    const result = makeLinksExternal(html);
    const expected = `
<p>Content 1</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">First link</a>
<p>Content 2</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">Second link</a>
`;
    expect(result).toBe(expected);
  });

  test("should not add target and rel attribute if they already exist", () => {
    const html = `
<p>Content 1</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">First link</a>
<p>Content 2</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">Second link</a>
`;
    const result = makeLinksExternal(html);
    const expected = `
<p>Content 1</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">First link</a>
<p>Content 2</p>
<a target="_blank" rel="noreferrer noopener" href="https://example.com">Second link</a>
`;
    expect(result).toBe(expected);
  });
});
