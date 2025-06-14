"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <header
      className={`py-5 drop-shadow-sm not-sm:px-3 ${
        theme === "light"
          ? "bg-lightModeElements text-lightModeText"
          : "bg-darkModeElements text-darkModeText"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-2xl">Where in the world?</h1>
          <button
            className="font-semibold cursor-pointer "
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </header>
  );
}
