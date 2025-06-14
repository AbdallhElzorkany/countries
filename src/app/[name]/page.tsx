"use client";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";

export default function CountryPage() {
  const [theme] = useContext(ThemeContext);
  const pathname = usePathname().split("/")[1];
  return (
    <div
      className={`font-nunito ${
        theme === "light" ? "bg-lightMode" : "bg-darkMode"
      } min-h-screen`}
    >

      <h1 className="container mx-auto">{pathname}</h1>
    </div>
  );
}
