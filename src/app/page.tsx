import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therosa Counseling - Trauma & Addiction Therapy in NH & MA',
  description: 'Professional online counseling specializing in trauma and addiction treatment for residents of New Hampshire and Massachusetts. Book your consultation today.',
};

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section - Asymmetric, Personal */}
      <section className="relative py-12 md:py-16 bg-[#FBF8F3]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start pt-8">
            <div className="relative">
              {/* Hand-drawn circle accent */}
              <div
                className="absolute -top-10 -left-8 w-28 h-28 border-[3px] border-brand-pink/40 rounded-full"
                style={{
                  borderStyle: 'dashed',
                  transform: 'rotate(-5deg)'
                }}
              />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 leading-tight relative">
                You don&apos;t have to carry this{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">alone</span>
                  <span
                    className="absolute -left-1 -right-1 bottom-1.5 h-3 bg-brand-pink/30 -z-0"
                    style={{ transform: 'rotate(-1deg)' }}
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-5 max-w-xl leading-relaxed">
                If you&apos;re dealing with trauma or addiction, you already know how isolating it can feel. I get it. And I&apos;m here to help.
              </p>

              <p className="text-lg md:text-xl text-gray-700 mb-5 max-w-xl leading-relaxed">
                I&apos;m a licensed therapist in New Hampshire and Massachusetts who specializes in trauma and addiction work. Not because it&apos;s trendy, but because it&apos;s what I&apos;m trained for and what I care about.
              </p>

              <p className="text-base md:text-lg text-gray-600 italic mt-8 pl-6 border-l-[3px] border-brand-pink max-w-lg leading-relaxed">
                Therapy isn&apos;t about me talking at you for an hour. It&apos;s about creating a space where you feel safe enough to figure things out—at your own pace.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/schedule"
                  className="inline-block bg-brand-purple text-white px-9 py-4 rounded-lg hover:bg-[#8B3589] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/about"
                  className="inline-block text-brand-purple py-4 border-b-2 border-brand-pink hover:text-brand-pink hover:border-brand-purple transition-all"
                >
                  Learn more about my approach →
                </a>
              </div>
            </div>

            <div>
              <div
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-[#F0E8DC] mt-10"
                style={{ transform: 'rotate(2deg)' }}
              >
                <h3 className="text-xl font-serif text-brand-purple mb-4">
                  What to expect:
                </h3>
                <ul className="space-y-3">
                  {[
                    'No judgment. Seriously.',
                    'Sessions are online (NH & MA residents)',
                    'We work at your pace, not mine',
                    'HIPAA-compliant and confidential',
                    'First session is just talking—no pressure'
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-700 pl-7 relative">
                      <span className="absolute left-0 text-brand-pink font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section - The Kind of Work I Do */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-snug">
                The kind of work I do
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
                I&apos;m not here to fix you, because you&apos;re not broken. But if things feel overwhelming right now, we can work through that together.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
                I specialize in helping people who&apos;ve experienced trauma and those struggling with addiction. These aren&apos;t separate issues—they&apos;re often connected, and we&apos;ll treat them that way.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                My approach combines trauma-informed care with practical coping strategies. Translation: we&apos;ll talk about the hard stuff, but we&apos;ll also build tools you can actually use.
              </p>
            </div>

            <div
              className="bg-[#FBF8F3] p-8 md:p-12 rounded-3xl border-[3px] border-[#F0E8DC]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <div className="mb-9">
                <h3 className="text-xl md:text-2xl font-serif text-brand-purple mb-3">
                  Trauma Counseling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether it&apos;s something recent or something you&apos;ve carried for years, trauma affects how you see the world. We&apos;ll work on processing what happened and helping you feel safe again.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-brand-purple mb-3">
                  Addiction Treatment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Addiction isn&apos;t a moral failing—it&apos;s a response to pain. We&apos;ll address both the substance use and what&apos;s underneath it. Sustainable recovery means dealing with both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handwritten Note Section */}
      <section className="relative bg-[#F5EFE6] py-16 md:py-20 overflow-hidden">
        {/* Decorative scribble */}
        <div className="absolute top-8 right-[10%] w-48 h-48 opacity-15 pointer-events-none hidden md:block">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 50 100 Q 80 50, 120 100 T 170 100"
              stroke="#A040A0"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="50" cy="100" r="5" fill="#E673B3"/>
            <circle cx="120" cy="100" r="5" fill="#E673B3"/>
            <circle cx="170" cy="100" r="5" fill="#E673B3"/>
          </svg>
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div
            className="text-3xl md:text-4xl text-gray-900 mb-6 leading-snug font-light"
            style={{
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
              transform: 'rotate(-2deg)'
            }}
          >
            &quot;Healing isn&apos;t linear, and that&apos;s okay&quot;
          </div>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Some weeks you&apos;ll feel progress. Other weeks it&apos;ll feel like you&apos;re back at square one. That&apos;s normal. That&apos;s actually how this works.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I&apos;m not going to promise quick fixes or miracle cures. What I can promise is a safe space, no judgment, and someone who actually listens.
          </p>
          <div
            className="text-2xl text-brand-purple mt-8 inline-block"
            style={{
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
              transform: 'rotate(-3deg)'
            }}
          >
            ~ Catherine
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
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='10' cy='10' r='1' fill='rgba(255,255,255,0.1)'/><circle cx='40' cy='30' r='1' fill='rgba(255,255,255,0.1)'/><circle cx='70' cy='20' r='1' fill='rgba(255,255,255,0.1)'/><circle cx='25' cy='60' r='1' fill='rgba(255,255,255,0.1)'/><circle cx='80' cy='70' r='1' fill='rgba(255,255,255,0.1)'/></svg>")`
          }}
        />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-snug">
            Ready to take the first step?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-9 leading-relaxed">
            Booking a consultation doesn&apos;t mean you&apos;re committing to anything. It just means you&apos;re willing to see if this might help. That takes courage.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-white text-brand-purple px-11 py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Book Your First Session
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
