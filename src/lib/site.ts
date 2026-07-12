const DEFAULT_SITE_ORIGIN = "https://danandjun.com";

function normalizeSiteOrigin(origin: string | undefined) {
  const value = (origin?.trim() || DEFAULT_SITE_ORIGIN).replace(/\/+$/, "");

  return new URL(value).origin;
}

export const SITE_ORIGIN = normalizeSiteOrigin(process.env.NEXT_PUBLIC_SITE_ORIGIN);
export const SITE_NAME = "danandjun.com";
export const SITE_DESCRIPTION =
  "Dan and Jun are software engineers sharing practical lessons from building software in big tech.";
export const PROFILE_IMAGE_PATH = "/assets/images/profilepic2.jpg";
