import Image from "next/image";
import { Country } from "./Countries";
import Link from "next/link";

export default function CountryCard({
  country,
  theme,
}: {
  country: Country;
  theme: "light" | "dark";
}) {
  return (
    <div
      className={`drop-shadow-md flex flex-col h-fit not-sm:w-2/3 not-sm:mx-auto not-sm:mb-15  gap-5 ${
        theme === "light"
          ? "bg-lightModeElements text-lightModeText"
          : "bg-darkModeElements text-darkModeText"
      } rounded-lg`}
    >
      <Image
        loading="lazy"
        width={100}
        height={100}
        src={country.flags.svg}
        alt={country.flags.alt}
        className={`w-full object-cover aspect-video rounded-t-lg`}
      />
      <Link href={`/${country.name.common}`} className="px-5 font-bold text-lg">{country.name.common}</Link>
      <div className="px-5 pb-10 flex flex-col gap-2">
        <p>
          Population:{" "}
          <span className={`opacity-80 font-light`}>{country.population}</span>
        </p>
        <p>
          Region:{" "}
          <span className={`opacity-80 font-light`}>{country.region}</span>
        </p>
        <p>
          Capital:{" "}
          <span className={`opacity-80 font-light`}>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}
