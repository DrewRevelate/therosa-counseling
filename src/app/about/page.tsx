import { MainLayout } from "@/components/layout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About - Therosa Counseling | Licensed Therapist for Trauma & Addiction",
  description:
    "Learn about our licensed therapist specializing in trauma and addiction treatment. Evidence-based, compassionate care for NH and MA residents.",
};

function DecorativeIcon({
  variant,
  className,
}: {
  variant: "heart" | "spark" | "check";
  className?: string;
}) {
  const classes = className ? `${className}` : "";

  switch (variant) {
    case "heart":
      return (
        <svg
          aria-hidden="true"
          className={`h-5 w-5 ${classes}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 20.75l-1.45-1.32C6.4 15.36 4 13.28 4 10.5 4 8.02 5.99 6 8.5 6c1.54 0 3.04.99 3.5 2.36C12.46 6.99 13.96 6 15.5 6 18.01 6 20 8.02 20 10.5c0 2.78-2.4 4.86-6.55 8.93L12 20.75z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg
          aria-hidden="true"
          className={`h-5 w-5 ${classes}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.25 4.25M14.15 14.15l4.25 4.25M18.4 5.6l-4.25 4.25M9.85 14.15L5.6 18.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg
          aria-hidden="true"
          className={`h-5 w-5 ${classes}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12.5l2.5 2.5 4.5-4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  const experienceHighlights = [
    "20+ years in mental health and counseling",
    "Crisis intervention and ER psychiatric services",
    "Specialized trauma clinic experience (4+ years)",
    "Adolescent addiction treatment (IOP facilitation)",
    "Community mental health and case management",
    "Teaching experience (psychology instructor)",
  ];

  const storyChapters = [
    {
      title: "Emergency room realities",
      description:
        "Years in hospital ERs taught me how to stay steady in crisis and offer grounded support when everything feels chaotic.",
      accentClass: "bg-gradient-to-br from-white via-white to-brand-pink/10",
    },
    {
      title: "Specialized trauma clinics",
      description:
        "Working in dedicated trauma programs showed me how to help people untangle experiences that feel unspeakable and make space for real relief.",
      accentClass: "bg-gradient-to-br from-white via-white to-brand-purple/10",
    },
    {
      title: "Addiction work & education",
      description:
        "I went back for a master&apos;s in addiction counseling because trauma and substance use are linked. My work focuses on healing both, so change sticks.",
      accentClass: "bg-gradient-to-br from-white via-white to-[#FDE6D8]",
    },
  ];

  const coreValues = [
    {
      title: "Compassion & Non-Judgment",
      description:
        "Creating a safe space where you can explore difficult experiences without shame or judgment.",
      icon: "heart" as const,
    },
    {
      title: "Evidence-Based Practice",
      description:
        "Utilizing proven therapeutic approaches backed by research and real-world clinical effectiveness.",
      icon: "check" as const,
    },
    {
      title: "Client-Centered Care",
      description:
        "Tailoring treatment to your unique needs, goals, and pace of healing.",
      icon: "spark" as const,
    },
    {
      title: "Cultural Sensitivity",
      description:
        "Honoring your background, identity, and lived experiences as integral to your healing journey.",
      icon: "heart" as const,
    },
  ];

  const approachHighlights = [
    {
      title: "Trauma-Informed Care",
      description:
        "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and somatic techniques to help you process traumatic experiences, reduce distressing symptoms, and reclaim a sense of safety and control.",
      icon: "spark" as const,
    },
    {
      title: "Addiction & Recovery",
      description:
        "My addiction treatment approach combines motivational interviewing, relapse prevention strategies, and exploration of underlying factors contributing to substance use. Together, we&apos;ll work to build sustainable coping skills and address the root causes of addiction.",
      icon: "check" as const,
    },
    {
      title: "Holistic Healing",
      description:
        "I recognize that mental health is interconnected with physical, emotional, and spiritual wellbeing. Our work together may address relationships, self-care, mindfulness, and lifestyle factors that support your overall health and recovery.",
      icon: "heart" as const,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F7F1EC] py-20">
        <div
          className="absolute -left-24 -top-32 h-72 w-72 rounded-full bg-brand-pink/30 opacity-60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-12%] top-16 h-64 w-64 rounded-full bg-brand-purple/20 opacity-60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-purple backdrop-blur">
              <DecorativeIcon variant="spark" className="text-brand-pink" />
              Catherine&apos;s story
            </span>

            <h1 className="text-4xl font-serif font-bold leading-tight text-gray-900 md:text-5xl">
              <span className="relative inline-block">
                <span className="relative z-10">About Therosa Counseling</span>
                <span
                  className="absolute inset-x-0 bottom-1 h-3 bg-brand-pink/30"
                />
              </span>
              <span className="mt-4 block text-2xl font-light text-gray-700 md:text-3xl">
                A practice built on lived experience, courage, and connection
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Dedicated to providing compassionate, evidence-based therapy for
              trauma and addiction, grounded in two decades of sitting with hard
              stories and helping them transform.
            </p>
          </div>

          <div className="relative mt-12 md:mt-16">
            <div
              className="relative mx-auto max-w-3xl rounded-2xl border border-brand-purple/15 bg-white/85 px-8 py-9 text-left shadow-xl backdrop-blur md:px-10 md:py-10"
            >
              <p className="text-lg italic leading-relaxed text-gray-700 md:text-xl">
                “Healing isn&apos;t about perfection; it&apos;s about finding a
                pace that feels possible and telling the truth in a space that
                can hold it.”
              </p>
              <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.35em] text-brand-purple/80">
                — Catherine Lambert, LMHC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Profile Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[minmax(280px,320px)_1fr] md:items-start lg:px-8">
          <div className="relative">
            <div
              className="relative rounded-3xl border border-brand-purple/20 bg-white/80 p-6 shadow-xl backdrop-blur"
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/Catherine_Lambert.jpg"
                  alt="Catherine Lambert, Licensed Mental Health Counselor"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Catherine Lambert
                </h2>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                  Licensed Mental Health Counselor
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  LMHC, Licensed in NH &amp; MA
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <span className="inline-flex w-max items-center gap-2 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-pink">
              <DecorativeIcon variant="heart" className="text-brand-pink" />
              Trauma &amp; addiction specialist
            </span>

            <h3 className="text-3xl font-serif font-bold text-gray-900">
              Welcome
            </h3>

            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;ve been working in mental health for over 20 years, and in
              that time, I&apos;ve learned that healing from trauma and
              addiction isn&apos;t about following a template—it&apos;s about
              meeting you exactly where you are and helping you move forward at
              your own pace.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              My background includes work in hospital emergency rooms, community
              mental health centers, and specialized trauma clinics. I&apos;ve
              worked with individuals and families dealing with everything from
              acute crisis situations to long-term recovery. This experience
              taught me that people don&apos;t need someone to fix them—they
              need someone who can handle the tough conversations, understand
              the complexity of trauma and addiction, and help them build real,
              sustainable change.
            </p>

            <div className="relative overflow-hidden rounded-3xl border border-brand-pink/30 bg-[#FBF7F1] px-6 py-6 shadow-sm">
              <p className="relative text-base leading-relaxed text-gray-700 md:text-lg">
                I went back to school specifically to earn a master&apos;s
                degree in addiction counseling because I kept seeing how deeply
                trauma and substance use are connected. Very few therapists
                specialize in both, but in my experience, you can&apos;t
                effectively treat one without addressing the other. That&apos;s
                what I do—I help people untangle the connection between their
                past experiences and current struggles, so healing can actually
                stick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Credentials Section */}
      <section className="relative overflow-hidden bg-[#F5EFE6] py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            Twenty years of showing up when things get real
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            These are the chapters that shaped how I practice—and why I lead
            with both warmth and truth.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {storyChapters.map((chapter, index) => (
              <div key={chapter.title} className="relative">
                <div
                  className={`relative h-full rounded-3xl border border-brand-purple/10 px-7 py-8 shadow-md ${chapter.accentClass}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-purple/70">
                    Chapter {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-serif font-semibold text-gray-900">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="relative rounded-[32px] border border-brand-purple/15 bg-white/90 px-8 py-10 shadow-xl backdrop-blur md:px-12 md:py-12">
              <h2 className="text-center text-3xl font-serif font-bold text-gray-900">
                Professional Credentials &amp; Training
              </h2>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                    Education
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                        <DecorativeIcon variant="spark" />
                      </span>
                      <span>
                        <strong>CAGS</strong> (Certificate of Advanced Graduate
                        Study), Mental Health Counseling - Rivier University
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                        <DecorativeIcon variant="spark" />
                      </span>
                      <span>
                        <strong>MS</strong>, Substance Abuse/Addiction
                        Counseling - Grand Canyon University
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                        <DecorativeIcon variant="spark" />
                      </span>
                      <span>
                        <strong>M.Ed.</strong>, Counseling - University of New
                        Hampshire
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                        <DecorativeIcon variant="spark" />
                      </span>
                      <span>
                        <strong>BA</strong>, Psychology - Queens College
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand-pink/70">
                    Licenses &amp; Certifications
                  </h3>
                  <ul className="mt-5 space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                        <DecorativeIcon variant="check" />
                      </span>
                      <span>
                        Licensed Mental Health Counselor (LMHC) - New Hampshire
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                        <DecorativeIcon variant="check" />
                      </span>
                      <span>
                        Licensed Mental Health Counselor (LMHC) - Massachusetts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                        <DecorativeIcon variant="check" />
                      </span>
                      <span>
                        CANS (Child and Adolescent Needs and Strengths)
                        Certified
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-brand-purple/70">
                  Clinical Experience Highlights
                </h3>
                <ul className="mt-6 grid gap-4 text-gray-700 md:grid-cols-2">
                  {experienceHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-brand-purple/5 px-4 py-4"
                    >
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-purple shadow-sm">
                        <DecorativeIcon variant="check" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-[1.2fr_1fr] md:gap-14 md:items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 md:text-4xl">
                Therapeutic philosophy
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  After 20+ years of doing this work, I&apos;ve learned that
                  effective therapy requires balance. Yes, I&apos;ll meet you
                  where you are with compassion and understanding. But I&apos;ll
                  also be honest with you and hold you accountable to the
                  changes you want to make. You deserve both warmth and
                  truthfulness—not one or the other.
                </p>
                <p>
                  My approach comes from working in some tough
                  environments—emergency rooms, crisis situations, families
                  involved with child protective services, people on probation.
                  I&apos;ve learned to handle difficult conversations without
                  judgment, and very little surprises me anymore. That
                  experience means I can create a safe space for you to talk
                  about the hard stuff, without you having to worry about
                  shocking me or being too much.
                </p>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <div className="relative overflow-hidden rounded-3xl border border-brand-pink/25 bg-[#FBF7F1] px-8 py-10 shadow-md">
                <h3 className="text-2xl font-serif font-semibold text-gray-900">
                  Core values
                </h3>
                <div className="mt-6 space-y-6">
                  {coreValues.map((value) => (
                    <div key={value.title} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-purple shadow-sm">
                        <DecorativeIcon variant={value.icon} />
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-purple">
                          {value.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple/12 via-white to-brand-pink/12 py-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            My therapeutic approach
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            I integrate multiple evidence-based approaches to create a
            personalized roadmap. Every plan is collaborative, paced for where
            you are right now, and grounded in practical tools you can actually
            use between sessions.
          </p>

          <div className="mt-12 space-y-8">
            {approachHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="relative rounded-3xl border border-brand-purple/15 bg-white/90 px-8 py-8 shadow-xl backdrop-blur md:px-10"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-purple">
                  <DecorativeIcon variant={highlight.icon} className="text-brand-purple" />
                  Focus
                </span>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #A040A0 0%, #E673B3 100%)" }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='10' cy='10' r='1' fill='rgba(255,255,255,0.12)'/><circle cx='40' cy='30' r='1' fill='rgba(255,255,255,0.12)'/><circle cx='70' cy='20' r='1' fill='rgba(255,255,255,0.12)'/><circle cx='25' cy='60' r='1' fill='rgba(255,255,255,0.12)'/><circle cx='80' cy='70' r='1' fill='rgba(255,255,255,0.12)'/></svg>")`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold leading-snug text-white md:text-4xl">
            Ready to start your next chapter?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Schedule a consultation to learn more about how therapy can support
            your healing.
          </p>
          <a
            href="https://calendar.app.google/zRvQ4e6mVcHk9KYD6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-10 py-4 text-lg font-medium text-brand-purple shadow-xl transition-all hover:bg-gray-100 hover:shadow-2xl"
          >
            Book your consultation
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
