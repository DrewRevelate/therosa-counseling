import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therosa Counseling - Trauma & Addiction Therapy in NH & MA',
  description: 'Professional online counseling specializing in trauma and addiction treatment for residents of New Hampshire and Massachusetts. Book your consultation today.',
};

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#F9F4EE] py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-purple/10 to-transparent md:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-start gap-12 pt-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div className="relative space-y-6">
              <h1 className="relative text-4xl font-serif leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                You don&apos;t have to carry this{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">alone</span>
                  <span className="absolute inset-x-0 bottom-1 h-2 rounded-sm bg-brand-pink/40" />
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
                If you&apos;re dealing with trauma or addiction, you already know how isolating it can feel. I get it. And I&apos;m here to help.
              </p>

              <p className="max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
                I&apos;m a licensed therapist in New Hampshire and Massachusetts with over 20 years of experience specializing in trauma and addiction. I went back to school specifically for a master&apos;s degree in addiction counseling because I saw how deeply these issues are connected. Not because it&apos;s trendy—because it&apos;s what actually works.
              </p>

              <p className="mt-8 max-w-lg border-l-2 border-brand-purple pl-6 text-base italic leading-relaxed text-gray-600 md:text-lg">
                Therapy isn&apos;t about me talking at you for an hour. It&apos;s about creating a space where you feel safe enough to figure things out—at your own pace.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/schedule"
                  className="inline-block rounded-lg bg-brand-purple px-9 py-4 text-lg font-medium text-white shadow-md transition-colors hover:bg-[#8B3589]"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/about"
                  className="inline-block border-b-2 border-brand-purple/30 py-4 text-lg font-medium text-brand-purple transition-colors hover:border-brand-purple hover:text-brand-pink"
                >
                  Learn more about my approach →
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-[#E4DAD0] bg-white/90 p-8 shadow-lg backdrop-blur">
                <h3 className="text-xl font-serif text-brand-purple md:text-2xl">
                  What to expect
                </h3>
                <div className="mt-6 space-y-3">
                  {[
                    'No judgment. Seriously.',
                    '20+ years experience with trauma & addiction',
                    'Sessions are online (NH & MA residents)',
                    'We work at your pace, not mine',
                    'HIPAA-compliant and confidential',
                    'First session is just talking—no pressure'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-pink" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kind of Work Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-5">
              <h2 className="text-3xl font-serif text-gray-900 md:text-4xl">
                The kind of work I do
              </h2>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                I&apos;m not here to fix you, because you&apos;re not broken. But if things feel overwhelming right now, we can work through that together.
              </p>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                I specialize in helping people who&apos;ve experienced trauma and those struggling with addiction. These aren&apos;t separate issues—they&apos;re often connected, and we&apos;ll treat them that way.
              </p>
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                My approach combines trauma-informed care with practical coping strategies. Translation: we&apos;ll talk about the hard stuff, but we&apos;ll also build tools you can actually use.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E4DAD0] bg-[#FBF7F1] p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-brand-purple md:text-2xl">
                    Trauma counseling
                  </h3>
                  <p className="mt-3 text-gray-700">
                    Whether it&apos;s something recent or something you&apos;ve carried for years, trauma affects how you see the world. We&apos;ll work on processing what happened and helping you feel safe again.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-purple md:text-2xl">
                    Addiction treatment
                  </h3>
                  <p className="mt-3 text-gray-700">
                    Addiction isn&apos;t a moral failing—it&apos;s a response to pain. We&apos;ll address both the substance use and what&apos;s underneath it. Sustainable recovery means dealing with both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perspective Section */}
      <section className="relative overflow-hidden bg-[#F4ECE3] py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="text-3xl font-serif italic leading-snug text-gray-900 md:text-4xl">
            “Healing isn&apos;t linear, and that&apos;s okay.”
          </div>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Some weeks you&apos;ll feel progress. Other weeks it&apos;ll feel like you&apos;re back at square one. That&apos;s normal. That&apos;s actually how this works.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            After 20+ years of doing this work—in emergency rooms, crisis clinics, and specialized trauma centers—I&apos;ve learned that very little surprises me anymore. I&apos;m not going to promise quick fixes or miracle cures. What I can promise is a safe space, no judgment, and someone who can handle whatever you&apos;re dealing with.
          </p>
          <div className="mt-8 inline-block text-2xl font-serif text-brand-purple">
            — Catherine
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-16 md:py-20"
        style={{
          background: 'linear-gradient(135deg, #A040A0 0%, #E673B3 100%)'
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M0 60 Q30 30 60 60 T120 60' stroke='rgba(255,255,255,0.2)' stroke-width='4' fill='none'/></svg>")`
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-serif leading-snug text-white md:text-4xl">
            Ready to take the first step?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/95 md:text-xl">
            Booking a consultation doesn&apos;t mean you&apos;re committing to anything. It just means you&apos;re willing to see if this might help. That takes courage.
          </p>
          <a
            href="/schedule"
            className="mt-8 inline-block rounded-lg bg-white px-11 py-5 text-lg font-semibold text-brand-purple shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Book Your First Session
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
