import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
