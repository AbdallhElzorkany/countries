"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";
import { LoaderPinwheel,MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Country = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  languages: {
    [key: string]: string;
  };
  flags: {
    svg: string | StaticImport;
    alt: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  borders: string[];
};

export default function CountryPage() {
  const [theme] = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState<string>();
  const pathname = usePathname().split("/")[1];
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${pathname}?fullText=true`
        );
        if (!response.ok) {
          setError("Country Not Found");
        }
        const data = await response.json();
        setCountry(data[0]);
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
    fetchCountry();
  }, [pathname]);
  return (
    <div
      className={`font-nunito ${
        theme === "light" ? "bg-lightMode" : "bg-darkMode"
      } min-h-screen`}
    >
      <div className="container relative mx-auto pt-20">
        <Link
          href="/"
          className={`rounded-sm mb-20 shadow-lg px-8 py-2 flex items-center w-fit gap-2 ${
            theme === "light"
              ? "text-lightModeText bg-lightModeElements"
              : "text-darkModeText bg-darkModeElements"
          }`}
        >
          {" "}
          <MoveLeft /> Back
        </Link>

        {isLoading && (
          <LoaderPinwheel
            className={`${
              theme === "light" ? "text-lightModeText" : "text-darkModeText"
            } size-28 animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          />
        )}
        {error && (
          <h1
            className={`${
              theme === "light" ? "text-lightModeText" : "text-darkModeText"
            } text-4xl absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {error}
          </h1>
        )}
        <div
          className={`${
            theme === "light" ? "text-lightModeText" : "text-darkModeText"
          } grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between items-center`}
        >
          <Image
            width={100}
            height={100}
            src={country?.flags.svg || ""}
            alt={country?.flags.alt || ""}
            className={`w-full object-cover aspect-video not-sm:w-11/12 not-sm:mx-auto`}
          />

          <div className="flex flex-col gap-12 not-sm:w-11/12 not-sm:mx-auto">
            <h1 className="font-extrabold text-2xl">{country?.name?.common}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <p>
                  Native Name:{" "}
                  <span className={`opacity-80 font-light`}>
                    {
                      country?.name?.nativeName?.[
                        Object.keys(country?.name?.nativeName)[0]
                      ].common
                    }
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.population}
                  </span>
                </p>
                <p>
                  Region:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.region}
                  </span>
                </p>
                <p>
                  Subregion:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.subregion}
                  </span>
                </p>
                <p>
                  Capital:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.capital}
                  </span>
                </p>
              </div>

              <div>
                <p>
                  Top Level Domain:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.tld}
                  </span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className={`opacity-80 font-light`}>
                    {
                      country?.currencies?.[Object.keys(country?.currencies)[0]]
                        .name
                    }
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className={`opacity-80 font-light`}>
                    {country?.languages
                      ? Object.keys(country.languages)
                          .map((language) => country.languages[language])
                          .join(", ")
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>

            <p>
              Border Countries:{" "}
              <span
                className={`opacity-80 sm:ml-3 font-light not-sm:flex flex-wrap gap-2`}
              >
                {country?.borders   ? country?.borders?.map((border) => (
                  <span
                    key={border}
                    className={`px-4 py-2 mr-2 not-sm:mr-0 rounded-sm shadow-md ${
                      theme === "light"
                        ? "bg-lightModeElements"
                        : "bg-darkModeElements"
                    }`}
                  >
                    {border}
                  </span>
                )) : "N / A"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
