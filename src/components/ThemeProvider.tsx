"use client";
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
export const ThemeContext = createContext<
  ["light" | "dark", Dispatch<SetStateAction<"light" | "dark">>]
>(["light", () => {}]);
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
