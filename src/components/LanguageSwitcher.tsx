import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const LanguageSwitcher: NextPage = () => {
  const router = useRouter();
  const { locale, pathname } = router;

  const formStyle =
    pathname.indexOf("onboarding-form") == -1 ? "" : "form-style";

  const langs = ["tc", "en", "sc"];

  const switchToLocale = () => {
    const path = router.asPath;
    router.push(path, path, { locale: locale === "tc"? "en" : "tc" });
  }

  const langMap = (lang:string) => {
    return [
      {
        key: "en",
        name: "EN",
      },
      {
        key: "tc",
        name: "繁",
      },
      {
        key: "sc",
        name: "簡",
      },
    ].find((l) => l.key === lang)?.name || ""
  }

  return (
    <div className="flex flex-row justify-end">
      {langs.map((lang, i) => {
        if (lang !== locale) {
          return (
            <React.Fragment key={i}>
              <p className="inline-block cursor-pointer mr-2" onClick={() => switchToLocale()}>
                { langMap(lang) }
              </p>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default LanguageSwitcher;
