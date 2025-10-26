import { MainLayout } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Trauma & Addiction Therapy | Therosa Counseling",
  description:
    "Specialized therapy services including trauma counseling, addiction treatment, and individual therapy. Evidence-based online care for NH and MA residents.",
};

function AccentDot({ tone }: { tone: "purple" | "pink" | "neutral" }) {
  const palette = {
    purple: "bg-brand-purple",
    pink: "bg-brand-pink",
    neutral: "bg-gray-400",
  } as const;

  return (
    <span
      className={`mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${palette[tone]}`}
    />
  );
}

export default function ServicesPage() {
  const traumaModalities = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description:
        "Identifies and reshapes thought patterns connected to trauma so you can respond differently in the present.",
    },
    {
      title: "Eye Movement Desensitization and Reprocessing (EMDR)",
      description:
        "Helps your brain process traumatic memories so their emotional charge no longer feels overwhelming.",
    },
    {
      title: "Somatic techniques",
      description:
        "Reconnects mind and body through grounding, breath, and sensory awareness to release tension stored in the nervous system.",
    },
    {
      title: "Parts-informed work",
      description:
        "Invites all parts of you—including the protective ones—into the conversation so healing sticks.",
    },
  ];

  const traumaConcerns = [
    "Post-traumatic stress (PTSD & C-PTSD)",
    "Childhood and attachment trauma",
    "Medical or caregiving trauma",
    "Trauma connected to addiction and recovery",
  ];

  const addictionApproaches = [
    {
      title: "Motivational interviewing",
      description:
        "Builds readiness for change without judgment, meeting you exactly where you are.",
    },
    {
      title: "CBT for substance use",
      description:
        "Uncovers the thoughts, emotions, and habits that keep the cycle going—and replaces them with practical tools.",
    },
    {
      title: "Relapse prevention planning",
      description:
        "Creates a personalized roadmap for staying grounded when cravings or stress hit.",
    },
    {
      title: "Dual-diagnosis support",
      description:
        "Addresses co-occurring mental health concerns so recovery isn’t happening in isolation.",
    },
  ];

  const addictionSupports = [
    "Alcohol, opioid, and stimulant use disorders",
    "Prescription medication misuse",
    "Early recovery stabilization",
    "Relapse prevention and long-term maintenance",
    "Family support and communication",
  ];

  const additionalServices = [
    {
      title: "Individual Therapy",
      description:
        "Weekly or bi-weekly sessions focused on anxiety, depression, life transitions, and relationship stressors.",
    },
    {
      title: "Crisis Recovery Support",
      description:
        "Short-term, focused support after acute events to help re-establish safety and coping strategies.",
    },
    {
      title: "Professional Consults",
      description:
        "Consultation for therapists, educators, and first responders navigating trauma and addiction dynamics.",
    },
  ];

  const expectations = [
    {
      title: "Initial conversation",
      description:
        "We use the first meeting to get a clear picture of what’s happening, what you’ve tried, and how you’d like things to feel different.",
      tone: "purple" as const,
    },
    {
      title: "Collaborative plan",
      description:
        "Together we sketch a plan that aligns with your goals, pace, and capacity. It’s flexible by design—we adapt as you grow.",
      tone: "pink" as const,
    },
    {
      title: "Steady support",
      description:
        "Most clients meet weekly or bi-weekly. Sessions blend processing work, skill-building, and accountability to keep you moving.",
      tone: "purple" as const,
    },
    {
      title: "Secure telehealth",
      description:
        "Every appointment happens through a HIPAA-compliant telehealth platform, giving you reliable access from anywhere in NH or MA.",
      tone: "pink" as const,
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
            Services
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight text-gray-900 md:text-5xl">
            Trauma &amp; addiction support that meets you where you are
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            Evidence-based therapy for when things feel heavy, complicated, or
            stuck. Licensed in New Hampshire and Massachusetts, delivered
            securely online.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I’ve spent more than two decades sitting with people in crisis,
                in recovery, and everywhere in between. That experience—spanning
                emergency rooms, specialized trauma programs, and intensive
                outpatient care—shaped a practice that’s grounded, direct, and
                deeply human.
              </p>
              <p>
                Sessions happen through a HIPAA-compliant telehealth platform so
                you can connect from a space that feels safe. We work together
                to understand what’s underneath the pain, build tools you can
                rely on, and create lasting change on your terms.
              </p>
            </div>
            <div className="rounded-3xl border border-[#E4DAD0] bg-[#FBF7F1] p-8 shadow-sm">
              <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                What informs the work
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <AccentDot tone="purple" />
                  <span>Trauma-informed, attachment-aware care</span>
                </li>
                <li className="flex items-start gap-3">
                  <AccentDot tone="purple" />
                  <span>Integrated trauma and addiction treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <AccentDot tone="purple" />
                  <span>Evidence-based modalities tailored to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <AccentDot tone="purple" />
                  <span>Licensed in NH &amp; MA; telehealth only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trauma counseling */}
      <section className="bg-gradient-to-br from-white via-white to-brand-purple/10 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="rounded-3xl border border-brand-purple/15 bg-white/90 p-8 shadow-xl backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-purple/70">
                Trauma counseling
              </h2>
              <p className="mt-5 text-3xl font-serif font-semibold text-gray-900">
                Rebuilding safety, one steady conversation at a time
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Trauma doesn’t respond to quick fixes. The work is careful,
                paced, and collaborative—so your nervous system has space to
                breathe again.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-900">
                  How we work
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  We start by understanding how trauma shows up for you—and how
                  it intersects with relationships, health, and daily rhythms.
                  From there, we draw on modalities that help your body and mind
                  process what happened without rushing or retraumatizing.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                  Therapeutic tools
                </h4>
                <ul className="mt-4 space-y-4">
                  {traumaModalities.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <AccentDot tone="purple" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                  Common focus areas
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {traumaConcerns.map((concern) => (
                    <div
                      key={concern}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
                    >
                      <AccentDot tone="purple" />
                      {concern}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction treatment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-pink/70">
                  Addiction treatment
                </h2>
                <p className="mt-5 text-3xl font-serif font-semibold text-gray-900">
                  Recovery that honors the story underneath the substance
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Addiction rarely exists on its own. We look at trauma, habits,
                  relationships, and nervous system regulation so you’re not
                  fighting the same battles without new support.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-pink/70">
                  Treatment approaches
                </h3>
                <ul className="mt-4 space-y-4">
                  {addictionApproaches.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <AccentDot tone="pink" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-pink/70">
                  Support often includes
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {addictionSupports.map((support) => (
                    <li
                      key={support}
                      className="flex items-center gap-3 rounded-2xl border border-brand-pink/20 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
                    >
                      <AccentDot tone="pink" />
                      {support}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-pink/15 bg-[#FCEFF6] p-8 shadow-xl backdrop-blur">
              <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-brand-pink/80">
                Lived experience in addiction work
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-gray-700">
                I earned a master’s degree in addiction counseling after seeing
                firsthand how trauma and substance use intersect. My background
                includes facilitating IOP groups, providing family support, and
                helping adolescents and adults navigate the messy middle of
                recovery. Expect accountability, compassion, and practical tools
                in every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-[#F7F1EC] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-serif font-semibold text-gray-900 md:text-4xl">
            Additional ways we can work together
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-700">
            The work is personalized. These offerings often weave into trauma
            and addiction treatment or serve as standalone support depending on
            what you need.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-[#E4DAD0] bg-white/90 p-6 shadow-sm backdrop-blur"
              >
                <h3 className="text-xl font-serif font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-serif font-semibold text-gray-900 md:text-4xl">
            What working together looks like
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-gray-700">
            Therapy isn’t linear. We build a structure that supports you and
            leaves room for the unexpected.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-brand-purple/10 bg-[#FBF7F1] p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <AccentDot tone={item.tone} />
                  <h3 className="text-lg font-serif font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
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
            Let’s figure out what support looks like for you
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            Book a consultation to talk through what’s going on, what you’ve
            tried, and how therapy can help.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/schedule"
              className="inline-block rounded-lg bg-white px-11 py-5 text-lg font-semibold text-brand-purple shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Schedule a Consultation
            </a>
            <a
              href="/contact"
              className="inline-block rounded-lg border border-white/70 px-11 py-5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

