"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { insuranceTypes, budgets } from "@/data/formOptions";

const fieldClass =
  "w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C9A227] focus-visible:ring-2 focus-visible:ring-[#C9A227]/30";

const initialForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  insuranceType: "",
  budget: "",
  message: "",
  consent: false,
};

export default function QuoteForm({ embedded = false }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.consent) next.consent = "Please confirm consent to continue.";
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const updateField = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const formCard = (
    <div className={embedded ? "" : "max-w-4xl mx-auto px-4 sm:px-6"}>
      <div className="bg-white border border-gray-200 shadow-sm">
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#C9A227]" aria-hidden />
            <span className="uppercase tracking-[4px] text-xs text-[#C9A227]">
              Enquiry Form
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#071B3A]">Get a Quote</h2>

          <p className="mt-4 text-gray-600 leading-8">
            Complete the form below and one of our advisers will contact you within two
            business hours.
          </p>

          {submitted ? (
            <div
              className="mt-10 rounded border border-[#C9A227]/40 bg-[#C9A227]/10 p-6 text-[#071B3A]"
              role="status"
            >
              <p className="font-semibold">Thank you for your enquiry.</p>
              <p className="mt-2 text-gray-700">
                A Meridian adviser will contact you shortly using the details you provided.
              </p>
            </div>
          ) : (
            <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-first-name" className="block text-sm mb-2 text-[#071B3A]">
                    First Name *
                  </label>
                  <input
                    id="quote-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={updateField("firstName")}
                    placeholder="John"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? "quote-first-name-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="quote-first-name-error" className="mt-2 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-last-name" className="block text-sm mb-2 text-[#071B3A]">
                    Last Name *
                  </label>
                  <input
                    id="quote-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={updateField("lastName")}
                    placeholder="Smith"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? "quote-last-name-error" : undefined}
                  />
                  {errors.lastName && (
                    <p id="quote-last-name-error" className="mt-2 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="quote-company" className="block text-sm mb-2 text-[#071B3A]">
                  Company / Organisation
                </label>
                <input
                  id="quote-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={updateField("company")}
                  placeholder="Your Company"
                  className={fieldClass}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-email" className="block text-sm mb-2 text-[#071B3A]">
                    Email Address *
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="john@example.com"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "quote-email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="quote-email-error" className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-sm mb-2 text-[#071B3A]">
                    Phone Number *
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={updateField("phone")}
                    placeholder="+44 20 7123 4567"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="quote-phone-error" className="mt-2 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="quote-insurance-type" className="block text-sm mb-2 text-[#071B3A]">
                  Insurance Type
                </label>
                <select
                  id="quote-insurance-type"
                  name="insuranceType"
                  value={form.insuranceType}
                  onChange={updateField("insuranceType")}
                  className={fieldClass}
                >
                  <option value="">Select Insurance Type</option>
                  {insuranceTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-budget" className="block text-sm mb-2 text-[#071B3A]">
                  Annual Premium Budget
                </label>
                <select
                  id="quote-budget"
                  name="budget"
                  value={form.budget}
                  onChange={updateField("budget")}
                  className={fieldClass}
                >
                  <option value="">Select Budget</option>
                  {budgets.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-message" className="block text-sm mb-2 text-[#071B3A]">
                  Your Message
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={updateField("message")}
                  placeholder="Tell us about your insurance requirements..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="quote-consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={updateField("consent")}
                    className="mt-1 accent-[#C9A227]"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "quote-consent-error" : undefined}
                  />
                  <label htmlFor="quote-consent" className="text-sm text-gray-500 leading-6">
                    I consent to Meridian Insurance Brokers storing my information so they can
                    respond to my enquiry.
                  </label>
                </div>
                {errors.consent && (
                  <p id="quote-consent-error" className="mt-2 text-sm text-red-600">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[#071B3A] py-4 font-semibold text-white transition hover:bg-[#0B2A57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
              >
                <Send size={18} className="transition group-hover:-translate-y-0.5" aria-hidden />
                Submit Enquiry
              </button>

              <p className="text-center text-sm text-gray-500">
                All enquiries are handled securely and confidentially.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return formCard;
  }

  return (
    <section className="bg-[#F8F8F8] py-16 sm:py-20" aria-labelledby="quote-form-heading">
      <h2 id="quote-form-heading" className="sr-only">
        Quote enquiry form
      </h2>
      {formCard}
    </section>
  );
}
