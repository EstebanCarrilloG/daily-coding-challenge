/**
 * Returns a string with the given title styled according to the given type.
 * Types are "subHeading" and "heading". "subHeading" will return the title
 * styled with a bright cyan color, while "heading" will return the title styled
 * with a bright yellow color and a bold font weight.
 * @param {string} title - The title to style.
 * @param {string} [type="subHeading"] - The type of styling to apply to the title.
 * @returns {string} The styled title string.
 */
export function styleText(title, type = "subHeading") {
  if (type === "subHeading") {
    return `\x1b[1;34m ▸ ${title} \x1b[0m\n`;
  }
  if (type === "heading") return `\n\x1b[1;34;43m • ${title} \x1b[0m`;
}
