export default function getSlugify(inputString: string | undefined) {
  if (inputString == null) {
    // Handle the case where inputString is undefined or null
    return "";
  }

  return inputString
    .toString() // Ensure it's a string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters (except hyphens)
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single hyphen
}
