export const makeLinksExternal = (htmlContent: string): string => {
  const anchorPattern = /<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["'].*?>/gi;

  function addTargetBlank(match: string, url: string): string {
    if (!match.includes('target="') && !match.includes("target=")) {
      return match.replace(
        "<a ",
        `<a target="_blank" rel="noreferrer noopener" `
      );
    }
    return match;
  }

  return htmlContent.replace(anchorPattern, addTargetBlank);
};
