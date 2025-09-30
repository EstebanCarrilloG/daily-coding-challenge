export function formatConsoleText(title, type = "subHeading") {
  if (type === "subHeading") {
    return `\x1b[1;34m ▸ ${title} \x1b[0m\n`;
  }
  if (type === "heading") return `\n\x1b[1;34;43m • ${title} \x1b[0m`;
}
