import { MainLayout } from "@/components/layout";
import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Therosa Counseling | Reach Out Today",
  description:
    "Contact Therosa Counseling to schedule a consultation or ask questions. Call us or use our secure contact form. Serving NH and MA residents.",
};

type ContactMethod = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  variant: "phone" | "email";
  footnote?: string[];
};

function ContactIcon({ variant }: { variant: "phone" | "email" }) {
  if (variant === "phone") {
    return (
      <svg
        className="h-12 w-12 text-brand-purple"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 5.75c0-1.24 1-2.25 2.25-2.25h2.55c.97 0 1.83.63 2.12 1.56l.97 3.17c.24.78-.12 1.62-.86 2l-.95.48a9.94 9.94 0 004.61 4.61l.48-.95c.38-.74 1.22-1.1 2-0.86l3.17.97c.93.29 1.56 1.15 1.56 2.12v2.55c0 1.24-1 2.25-2.25 2.25H18c-8.28 0-14.5-6.72-14.5-15v-.1Z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-12 w-12 text-brand-pink"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20h-12.5A2.75 2.75 0 0 1 3 17.25V6.75Zm1.5.12 6.85 4.28a1.75 1.75 0 0 0 1.8 0l6.85-4.28"
      />
    </svg>
  );
}

export default function ContactPage() {
  const contactMethods: ContactMethod[] = [
    {
      title: "Call Catherine",
      description:
        "If you prefer talking things through, call to ask questions or book your first session. I return messages within one business day.",
      actionLabel: "(123) 456-7890",
      href: "tel:+1234567890",
      variant: "phone",
      footnote: [
        "Mon – Fri: 9:00 AM – 6:00 PM ET",
        "Saturday: By appointment",
      ],
    },
    {
      title: "Email the practice",
      description:
        "Send a note with a few details about what you’re looking for. Replies typically arrive within 1–2 business days.",
      actionLabel: "contact@therosacounseling.com",
      href: "mailto:contact@therosacounseling.com",
      variant: "email",
      footnote: ["For urgent needs, use the crisis resources below."],
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F1EC] py-20">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-purple/10 to-transparent md:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-purple backdrop-blur">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight text-gray-900 md:text-5xl">
            Let’s start a conversation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            Whether you’re ready to book or simply gathering information, reach
            out in the way that feels best for you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-[#E4DAD0] bg-white/95 p-8 shadow-sm backdrop-blur"
              >
                <ContactIcon variant={method.variant} />
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-gray-900">
                    {method.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {method.description}
                  </p>
                </div>
                <div>
                  <a
                    href={method.href}
                    className="inline-flex items-center text-lg font-semibold text-brand-purple transition-colors hover:text-brand-pink"
                  >
                    {method.actionLabel}
                  </a>
                  {method.footnote ? (
                    <ul className="mt-4 space-y-1 text-xs uppercase tracking-[0.35em] text-gray-500">
                      {method.footnote.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-brand-purple/15 bg-[#FBF7F1] px-8 py-10 text-center shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-gray-900">
              Prefer to self-schedule?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              Browse current availability and pick a consultation time that works
              for you. You’ll receive a confirmation email with telehealth
              details.
            </p>
            <a
              href="https://calendar.app.google/zRvQ4e6mVcHk9KYD6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-brand-purple px-10 py-4 text-base font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-[#8B3589] hover:shadow-lg"
            >
              View available times
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-[#F4ECE3] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 md:text-4xl">
              Send a secure message
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
              Share a little about what you’re looking for and how to reach you.
              I’ll reply within two business days.
            </p>
          </div>
          <div className="mt-12 rounded-3xl border border-white/60 bg-white/95 p-8 shadow-xl backdrop-blur">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
            Serving adults in New Hampshire &amp; Massachusetts
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E4DAD0] bg-[#FBF7F1] px-8 py-10 shadow-sm">
            <h2 className="text-center text-3xl font-serif font-semibold text-gray-900 md:text-4xl">
              Licensed to support you where you are
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-700">
              I currently work with clients who reside in these states. If
              you’re elsewhere, feel free to reach out—I’m happy to help locate
              resources in your area.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  state: "New Hampshire",
                  description:
                    "Telehealth available to residents across the state.",
                },
                {
                  state: "Massachusetts",
                  description:
                    "Secure online sessions for MA residents wherever you’re located.",
                },
              ].map((region) => (
                <div
                  key={region.state}
                  className="rounded-2xl border border-brand-purple/15 bg-white px-6 py-6 text-center shadow-sm"
                >
                  <h3 className="text-xl font-serif font-semibold text-brand-purple">
                    {region.state}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
              Due to licensure rules, I’m unable to provide therapy outside NH
              &amp; MA.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ link */}
      <section className="bg-[#F4ECE3] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-2xl font-serif font-semibold text-gray-900">
            Have questions before reaching out?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            The FAQ covers fees, insurance, how telehealth works, and what to do
            in urgent situations.
          </p>
          <a
            href="/faq"
            className="mt-6 inline-flex items-center text-base font-semibold text-brand-purple transition-colors hover:text-brand-pink"
          >
            Visit the FAQ →
          </a>
        </div>
      </section>

      {/* Crisis resources */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200/60 bg-red-50 px-8 py-10 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <svg
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 4h.01m-7.938 4h15.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3Z"
              />
            </svg>
            <div className="text-gray-800">
              <h3 className="text-xl font-serif font-semibold text-gray-900">
                If you’re in crisis, please reach out immediately
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Call 911 or go to the nearest emergency room. The following
                resources are available 24/7 in the United States:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or
                  text 988
                </li>
                <li>
                  <strong>Crisis Text Line:</strong> Text HOME to 741741
                </li>
                <li>
                  <strong>SAMHSA National Helpline:</strong> 1-800-662-4357
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

