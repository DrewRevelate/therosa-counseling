import { MainLayout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Common Questions About Therapy | Therosa Counseling",
  description:
    "Answers to frequently asked questions about fees, insurance, online therapy sessions, and the counseling process at Therosa Counseling.",
};

type FAQItem = {
  question: string;
  answer: string;
  details?: string[];
  tone?: "purple" | "pink";
};

function FAQCard({
  item,
  tone = "purple",
}: {
  item: FAQItem;
  tone?: "purple" | "pink";
}) {
  const palette =
    tone === "purple"
      ? {
          border: "border-brand-purple/15",
          heading: "text-brand-purple",
          chip: "bg-brand-purple/10 text-brand-purple",
        }
      : {
          border: "border-brand-pink/15",
          heading: "text-brand-pink",
          chip: "bg-brand-pink/10 text-brand-pink",
        };

  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-3xl border ${palette.border} bg-white/95 p-6 shadow-sm backdrop-blur`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${palette.chip}`}
        >
          FAQ
        </span>
        <h3 className="text-lg font-serif font-semibold text-gray-900">
          {item.question}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{item.answer}</p>
      {item.details ? (
        <ul className="mt-2 space-y-2 text-sm text-gray-700">
          {item.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span
                className={`mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${
                  tone === "purple" ? "bg-brand-purple" : "bg-brand-pink"
                }`}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function FAQPage() {
  const gettingStarted: FAQItem[] = [
    {
      question: "How do I schedule my first appointment?",
      answer:
        "Book a consultation through the online scheduler or reach out via phone/email. We’ll find a time that works and use that first call to make sure it feels like the right fit.",
    },
    {
      question: "What happens in the first session?",
      answer:
        "It’s a conversation—no pressure. We’ll talk through what brought you here, what you want to change, and what’s worked (or hasn’t) before. I’ll map out how therapy typically works, and you can decide how you’d like to move forward.",
    },
    {
      question: "Is therapy only available online?",
      answer:
        "Yes. Sessions happen via a secure, HIPAA-compliant telehealth platform so you can access therapy from a space that feels safe and private to you.",
    },
    {
      question: "Who do you work with?",
      answer:
        "I’m licensed in New Hampshire and Massachusetts and currently work with adults (18+) navigating trauma, addiction, and related mental health concerns.",
    },
  ];

  const feesInsurance: FAQItem[] = [
    {
      question: "How much do sessions cost?",
      answer:
        "We talk candidly about fees during the consultation. Payments are made at the time of service, and we can explore flexible options if cost is a barrier.",
      tone: "pink",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Coverage differs by plan. I’m happy to provide a superbill you can submit for potential reimbursement if out-of-network benefits apply.",
      tone: "pink",
    },
    {
      question: "Can I use HSA or FSA funds?",
      answer:
        "Yes. Most Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) cover therapy. Check with your provider and keep your session receipts.",
      tone: "pink",
    },
  ];

  const telehealthQuestions: FAQItem[] = [
    {
      question: "Is online therapy as effective as in-person therapy?",
      answer:
        "Research shows telehealth can be just as effective as in-person sessions for most concerns, including trauma and addiction. The added benefit: you’re in your own environment.",
    },
    {
      question: "What technology do I need?",
      answer:
        "You’ll need a device with video/audio (computer, tablet, or phone), a reliable internet connection, and a private space. A secure session link is sent before each appointment.",
      details: [
        "Device with camera + microphone",
        "Stable internet connection",
        "Private, quiet space",
        "Access to the secure telehealth link",
      ],
    },
    {
      question: "Is it confidential?",
      answer:
        "Yes. The telehealth platform is encrypted and HIPAA-compliant. Your information is protected with the same standards as in-person care.",
    },
    {
      question: "What if we get disconnected?",
      answer:
        "If technology glitches, I’ll call you at the number on file. We can troubleshoot or switch to phone/reschedule as needed.",
    },
    {
      question: "How long are sessions?",
      answer:
        "Standard sessions run 50–60 minutes. The initial consult may run slightly longer so we have space to cover your history and questions.",
    },
  ];

  const processQuestions: FAQItem[] = [
    {
      question: "How long will I need therapy?",
      answer:
        "It depends on your goals and what you’re working through. Some people feel significant shifts within a few months; others stay longer-term. We check in regularly and adjust together.",
      tone: "pink",
    },
    {
      question: "How often should I come?",
      answer:
        "Weekly is most common at the start. As things stabilize, we may move to bi-weekly or monthly—whatever keeps momentum without overwhelming you.",
      tone: "pink",
    },
    {
      question: "What if I’m in crisis?",
      answer:
        "If you’re in immediate danger, call 911 or go to the nearest ER. For urgent support, use 988 (Suicide & Crisis Lifeline), text HOME to 741741, or call SAMHSA’s helpline at 1-800-662-4357.",
      tone: "pink",
    },
    {
      question: "Do you prescribe medication?",
      answer:
        "I don’t prescribe, but I collaborate with prescribers. If you need a referral to psychiatry, we’ll talk through options.",
      tone: "pink",
    },
    {
      question: "Can someone join my session?",
      answer:
        "Therapy is primarily one-on-one, but when it’s therapeutically helpful and you’re comfortable, we can invite a partner or family member into a session.",
      tone: "pink",
    },
  ];

  const privacyQuestions: FAQItem[] = [
    {
      question: "Is everything confidential?",
      answer:
        "Yes—with a few legal exceptions like imminent risk of harm, suspected abuse, or court orders. If we ever need to navigate those, I’ll discuss it with you whenever possible.",
      details: [
        "Risk of harm to self or others",
        "Suspected abuse or neglect of a vulnerable person",
        "Court orders requiring disclosure",
      ],
    },
    {
      question: "How is my information stored?",
      answer:
        "All records live in an encrypted, HIPAA-compliant system. Telehealth sessions and messaging happen through secure, privacy-first platforms.",
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
            FAQ
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight text-gray-900 md:text-5xl">
            Questions people often ask before we start
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            If you’re unsure about fees, logistics, or whether online therapy
            can actually help—you’re not alone. Start here.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-purple md:text-3xl">
              Getting started
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {gettingStarted.map((item) => (
                <FAQCard key={item.question} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-pink md:text-3xl">
              Fees &amp; insurance
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {feesInsurance.map((item) => (
                <FAQCard
                  key={item.question}
                  item={item}
                  tone={item.tone ?? "pink"}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-purple md:text-3xl">
              Telehealth &amp; logistics
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {telehealthQuestions.map((item) => (
                <FAQCard key={item.question} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-pink md:text-3xl">
              Treatment &amp; process
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {processQuestions.map((item) => (
                <FAQCard
                  key={item.question}
                  item={item}
                  tone={item.tone ?? "pink"}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-purple md:text-3xl">
              Privacy &amp; confidentiality
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {privacyQuestions.map((item) => (
                <FAQCard key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          background: "linear-gradient(135deg, #A040A0 0%, #E673B3 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M0 60 Q30 30 60 60 T120 60' stroke='rgba(255,255,255,0.2)' stroke-width='4' fill='none'/></svg>")`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold leading-snug text-white md:text-4xl">
            Still unsure about something?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            Reach out with a question or book a consultation. We’ll walk through
            what working together could look like.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-11 py-5 text-lg font-semibold text-brand-purple shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Contact Me
            </a>
            <a
              href="https://calendar.app.google/zRvQ4e6mVcHk9KYD6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-white/70 px-11 py-5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

