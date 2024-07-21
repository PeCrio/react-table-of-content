import { addIdToHeadingTags } from "../addIdToHeadingTags";

describe("addIdToHeadingTags", () => {
  test("html string containing heading tags should be transformed to contain dash-cased id of their text content", () => {
    const html = `
<h1>Heading 1</h1>
<p>Content 1</p>
<h2>Heading 2</h2>
<p>Content 2</p>
`;

    const result = addIdToHeadingTags(html);

    const expected = `
<h1 id="heading-1">Heading 1</h1>
<p>Content 1</p>
<h2 id="heading-2">Heading 2</h2>
<p>Content 2</p>
`;
    expect(result).toBe(expected);
  });

  test("html string containing heading tags with existing id should not be transformed", () => {
    const html = `
<h1 id="existing-id">Heading 1</h1>
<p>Content 1</p>
<h2 id="existing-id">Heading 2</h2>
<p>Content 2</p>
`;

    const result = addIdToHeadingTags(html);

    const expected = `
<h1 id="existing-id">Heading 1</h1>
<p>Content 1</p>
<h2 id="existing-id">Heading 2</h2>
<p>Content 2</p>
`;
    expect(result).toBe(expected);
  });
});
