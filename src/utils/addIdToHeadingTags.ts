import { dashCase } from "./dashCase";

export const addIdToHeadingTags = (htmlContent: string): string => {
  const pattern = /<(h[1-6])>(.*?)<\/\1>/gi;

  const addId = (match: string, tag: string, content: string): string => {
    const contentWithoutTags = content.replace(/<[^>]*>/g, "");
    const idValue = dashCase(contentWithoutTags);
    return `<${tag} id="${idValue}">${content}</${tag}>`;
  };

  return htmlContent.replace(pattern, addId);
};
