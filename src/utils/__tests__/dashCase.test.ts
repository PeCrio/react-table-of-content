import { dashCase } from "../dashCase";

describe("dashCase", () => {
  test("should transform text to dash-case format", () => {
    const text = "This is a text";
    const result = dashCase(text);
    expect(result).toBe("this-is-a-text");
  });
});
