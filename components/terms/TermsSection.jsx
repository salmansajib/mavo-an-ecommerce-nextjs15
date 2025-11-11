import React from "react";
import Link from "next/link";

export default function TermsSection() {
  return (
    <div className="min-h-screen bg-white mt-[120px]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Terms of Service
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
              Welcome to our e-commerce store (the "Site"). By accessing or
              using the Site, you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree, please do not use the Site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              2. Use of the Site
            </h2>
            <p className="text-black leading-relaxed">
              You may use the Site only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-black">
              <li>
                Post or transmit any unlawful, threatening, or abusive content.
              </li>
              <li>Interfere with the Site's functionality.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Site.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              3. Orders and Payments
            </h2>
            <p className="text-black leading-relaxed">
              All orders are subject to availability and confirmation of the
              order price. Dispatch times may vary according to availability. We
              are not responsible if a product is not available upon order
              confirmation.
            </p>
            <p className="text-black leading-relaxed mt-4">
              Payments are processed securely. You agree to provide accurate
              payment information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              4. Returns and Refunds
            </h2>
            <p className="text-black leading-relaxed">
              We offer a 30-day return policy for unused items in original
              packaging. Refunds will be processed within 7 business days of
              receiving the return.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-black leading-relaxed">
              All content on the Site, including text, graphics, logos, and
              images, is the property of the Site owner or its licensors and is
              protected by copyright laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-black leading-relaxed">
              To the fullest extent permitted by law, the Site owner shall not
              be liable for any indirect, incidental, or consequential damages
              arising from your use of the Site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4">
              7. Governing Law
            </h2>
            <p className="text-black leading-relaxed">
              These Terms are governed by the laws of the USA. Any disputes will
              be resolved in the courts of USA.
            </p>
          </section>

          <section className="text-center">
            <p className="text-black">
              If you have any questions about these Terms, contact us at{" "}
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
