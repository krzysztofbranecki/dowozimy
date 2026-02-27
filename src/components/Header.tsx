"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const localeLabels: Record<string, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  nl: "NL",
};

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { key: "services", href: "#services" },
    { key: "process", href: "#process" },
    { key: "gallery", href: "#gallery" },
    { key: "contact", href: "#contact" },
  ] as const;

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">dowozimy</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    locale === loc
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-dark text-primary-dark text-sm font-semibold rounded-lg transition-colors"
            >
              {t("cta")}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-600 hover:text-primary py-1"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <button
                  key={loc}
                  onClick={() => {
                    switchLocale(loc);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                    locale === loc
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center px-4 py-2 bg-accent text-primary-dark text-sm font-semibold rounded-lg"
            >
              {t("cta")}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
