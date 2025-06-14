"use client";
import { LoaderPinwheel } from "lucide-react";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
export type Country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital: string[];
  region: string;
  population: number;
};
export default function Countries({
  region,
  name,
  theme,
}: {
  region: string;
  name: string;
  theme: "light" | "dark";
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setError(undefined);
        setIsLoading(true);
        setCountries([]);
        const response = await fetch(
          `https://restcountries.com/v3.1/${
            region ? `region/${region}` : name ? `name/${name}` : "all"
          }?fields=name,flags,capital,region,population`
        );
        if (!response.ok) {
          setError("Country Not Found");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [name, region]);
  console.log(countries);
  return (
    <div className="mt-20 container mx-auto relative min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between sm:gap-5 md:gap-10 lg:gap-20">
      {isLoading && (
        <LoaderPinwheel
          className={`${
            theme === "light" ? "text-lightModeText" : "text-darkModeText"
          } size-28 animate-spin absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4`}
        />
      )}
      {error && (
        <h1
          className={`${
            theme === "light" ? "text-lightModeText" : "text-darkModeText"
          } text-4xl absolute font-semibold top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4`}
        >
          {error}
        </h1>
      )}
      {countries.length > 0 &&
        countries.map((country: Country) => (
          <CountryCard
            country={country}
            theme={theme}
            key={country.name.common}
          />
        ))}
    </div>
  );
}
