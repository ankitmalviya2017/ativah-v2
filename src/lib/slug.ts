/**
 * Slug Generator Utility
 *
 * Example input:
 * name: "Nike Men Solid Round Neck Tshirt"
 * id: "12345678"
 *
 * Output: "nike-men-solid-round-neck-tshirt-12345678"
 */

export function generateSlug(name: string, id: string): string {
  const normalizedName = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with dashes
    .replace(/^-+|-+$/g, ""); // Remove trailing/leading dashes

  return `${normalizedName}-${id}`;
}

/**
 * Extracts product ID from a generated slug
 */
export function extractIdFromSlug(slug: string): string {
  if (!slug) return "";
  const parts = slug.split("-");
  return parts[parts.length - 1];
}
