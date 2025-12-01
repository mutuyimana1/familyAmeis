"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState<string>("");
  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE"))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie=`MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLanguage = async (newLocale: string) => {
     setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale};`;
    router.refresh(); // reload UI with new language
  };
  return (
   <div className="relative inline-block text-left">
  <select
    value={locale}
    onChange={(e) => changeLanguage(e.target.value)}
    className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:outline-none cursor-pointer"
  >
    <option value="en">EN</option>
    <option value="rw">RW</option>
    <option value="fr">FR</option>
  </select>
</div>

  );
}
