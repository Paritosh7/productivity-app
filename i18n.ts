import { getRequestConfig } from "next-intl/server";

// error: A `locale` is expected to be returned from `getRequestConfig`, but none was returned.
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
