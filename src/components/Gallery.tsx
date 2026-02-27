import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations("Gallery");

  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-shadow"
            >
              <div className="text-center text-gray-400">
                <svg
                  className="w-12 h-12 mx-auto mb-2 group-hover:text-primary/30 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                </svg>
                <span className="text-xs">Placeholder {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
