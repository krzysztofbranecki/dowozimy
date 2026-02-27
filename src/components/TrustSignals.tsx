"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  value,
  duration = 2000,
  inView,
}: {
  value: string;
  duration?: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!inView) return;

    const target = parseInt(numericPart, 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value, numericPart, prefix, suffix, duration]);

  return <span>{inView ? display : `${prefix}0${suffix}`}</span>;
}

export default function TrustSignals() {
  const t = useTranslations("TrustSignals");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = ["deliveries", "countries", "satisfaction", "experience"] as const;

  return (
    <section className="py-20 bg-primary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          {t("title")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter
                  value={t(`stats.${stat}.value`)}
                  inView={inView}
                />
              </div>
              <div className="text-sm sm:text-base text-blue-200">
                {t(`stats.${stat}.label`)}
              </div>
            </div>
          ))}
        </div>

        {/* EU Map placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/10 rounded-2xl p-8 max-w-md w-full text-center">
            <svg
              className="w-24 h-24 mx-auto text-white/30 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            <p className="text-white/50 text-sm">{t("mapAlt")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
