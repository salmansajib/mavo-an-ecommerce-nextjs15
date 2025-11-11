import React from "react";
import Link from "next/link";

export default function PrivacySection() {
  return (
    <div className="min-h-screen bg-white mt-[120px]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-black">Last updated: November 11, 2025</p>
          <Link
            href="/"
            className="inline-block mt-6 text-black hover:underline"
          >
            ← Back to Home
          </Link>
        </header>

        <main className="prose prose-lg max-w-none prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              1. Introduction
            </h2>
            <p className="text-black leading-relaxed">
              We respect your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use,
              and disclose your information when you use our e-commerce site
              (the "Site").
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              2. Information We Collect
            </h2>
            <p className="text-black leading-relaxed">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-black">
              <li>
                <strong>Personal Information:</strong> Name, email, shipping
                address, and payment details when you place an order.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, and time spent on the Site.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your
                experience and analyze traffic.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-black leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-black">
              <li>Process and fulfill orders.</li>
              <li>Send promotional emails (you can opt out anytime).</li>
              <li>Improve the Site and personalize your experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-black leading-relaxed">
              We do not sell your personal data. We may share it with:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-black">
              <li>
                Service providers (e.g., shipping companies, payment
                processors).
              </li>
              <li>Law enforcement if required by law.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="text-black leading-relaxed">
              Our Site uses cookies for functionality and analytics. You can
              manage cookie preferences through your browser settings.
              Third-party services like Google Analytics may also collect
              anonymized data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              6. Data Security
            </h2>
            <p className="text-black leading-relaxed">
              We implement reasonable security measures to protect your data,
              including encryption for sensitive information. However, no system
              is completely secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              7. Your Rights
            </h2>
            <p className="text-black leading-relaxed">
              You have the right to access, update, or delete your personal
              data. Contact us to exercise these rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-black leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </section>

          <section className="text-center">
            <p className="text-black">
              If you have questions about this Privacy Policy, contact us at
              <a
                href="mailto:support@yourstore.com"
                className="text-black hover:underline"
              >
                support@yourstore.com
              </a>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
