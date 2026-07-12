import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PROFILE_IMAGE_PATH, SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN, SITE_TITLE } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: PROFILE_IMAGE_PATH,
        width: 800,
        height: 800,
        alt: "Dan and Jun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [PROFILE_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: PROFILE_IMAGE_PATH,
    apple: PROFILE_IMAGE_PATH,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="block text-foreground [font-family:Inter,_ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
