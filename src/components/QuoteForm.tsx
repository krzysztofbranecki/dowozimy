"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  from?: string;
  to?: string;
}

export default function QuoteForm() {
  const t = useTranslations("QuoteForm");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    message: "",
    assembly: false,
    disposal: false,
    packaging: false,
    insurance: false,
  });

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = t("errors.nameRequired");
    if (!formData.email.trim()) {
      errs.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t("errors.emailInvalid");
    }
    if (!formData.from.trim()) errs.from = t("errors.fromRequired");
    if (!formData.to.trim()) errs.to = t("errors.toRequired");
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
  }

  function updateField(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (typeof value === "string" && errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-900">{t("success")}</p>
          </div>
        </div>
      </section>
    );
  }

  const checkboxOptions = ["assembly", "disposal", "packaging", "insurance"] as const;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.name")} *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.name ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.email")} *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.email ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.phone")}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              />
            </div>

            {/* From */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.from")} *
              </label>
              <input
                type="text"
                value={formData.from}
                onChange={(e) => updateField("from", e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.from ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors`}
              />
              {errors.from && (
                <p className="mt-1 text-sm text-red-500">{errors.from}</p>
              )}
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.to")} *
              </label>
              <input
                type="text"
                value={formData.to}
                onChange={(e) => updateField("to", e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.to ? "border-red-400" : "border-gray-300"
                } focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors`}
              />
              {errors.to && (
                <p className="mt-1 text-sm text-red-500">{errors.to}</p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("fields.message")}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Additional services checkboxes */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              {t("options.title")}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {checkboxOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData[option]}
                    onChange={(e) => updateField(option, e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm text-gray-600">
                    {t(`options.${option}`)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
