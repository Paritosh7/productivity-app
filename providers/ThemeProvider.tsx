"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from "next-themes";
import {} from "next-themes";

export const ThemeProvider = ({
  children,
  ...props
}: NextThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
