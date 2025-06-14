"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
import Countries from "@/components/Countries";
export default function Home() {
  const [theme] = useContext(ThemeContext);
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const debouncedSearch = useDebounce(name, 1);
  return (
    <div
      className={`font-nunito ${
        theme === "light" ? "bg-lightMode" : "bg-darkMode"
      } min-h-screen`}
    >
      <section>
        <div className="container mx-auto pt-5 flex justify-between items-center not-sm:flex-col not-sm:gap-5">
          <div
            className={`not-sm:w-3/4 flex items-center px-5 py-3 gap-2 shadow-sm ${
              theme === "light"
                ? "text-lightModeInput placeholder:text-lightModeText bg-lightModeElements"
                : "text-darkModeInput placeholder:text-darkModeText bg-darkModeElements"
            }  rounded-md`}
          >
            <Search />
            <input
              className={`font-semibold outline-none px-5`}
              placeholder="Search for countries..."
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setRegion("");
              }}
            />
          </div>

          <select
            className={`not-sm:w-3/4 px-5 py-3 ${
              theme === "light"
                ? "bg-lightModeElements text-lightModeText"
                : "bg-darkModeElements text-darkModeText"
            } rounded-md shadow-sm`}
            defaultValue={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setName("");
            }}
            name="region"
          >
            <option value="" disabled hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </section>
      <Countries region={region} name={debouncedSearch} theme={theme} />
    </div>
  );
}
export const useDebounce = function <T>(value: T, delay = 0.5) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay * 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
