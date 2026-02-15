export default function validateBooksPayload(
  body: any,
  file?: Express.Multer.File,
) {
  const { title, author, publisher, year } = body;

  if (!file) {
    throw new Error("Book cover is required!");
  }

  if (!title || !author || !publisher || !year) {
    throw new Error("Please fill in all required fields");
  }

  if (year && isNaN(Number(year))) {
    throw new Error("Year must be a valid number");
  }

  if (
    file.mimetype !== "image/jpeg" &&
    file.mimetype !== "image/webp" &&
    file.mimetype !== "image/png"
  ) {
    throw new Error("Book cover must be a JPEG, WEBP, or PNG image");
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Book cover must be less than 5MB");
  }
}
