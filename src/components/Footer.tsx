import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">dowozimy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${t("contact.email")}`} className="hover:text-white transition-colors">
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {t("contact.phone")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{t("contact.address")}</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("links.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("links.services")}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t("links.process")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t("links.gallery")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t("links.quote")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>{t("copyright", { year: String(year) })}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t("legal.privacy")}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t("legal.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
