import { MainLayout } from "@/components/layout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About - Therosa Counseling | Licensed Therapist for Trauma & Addiction",
  description:
    "Learn about our licensed therapist specializing in trauma and addiction treatment. Evidence-based, compassionate care for NH and MA residents.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-purple/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            About Therosa Counseling
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Dedicated to providing compassionate, evidence-based therapy for
            trauma and addiction
          </p>
        </div>
      </section>

      {/* Therapist Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:gap-12 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-64 h-64 mx-auto flex items-center justify-center">
                <Image
                  src="/Catherine_Lambert.png"
                  alt="Catherine Lambert"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  Catherine Lambert
                </h2>
                <p className="text-gray-600 font-medium">
                  Licensed Mental Health Counselor
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  LMHC, Licensed in NH & MA
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Welcome
                </h3>
                <p className="text-gray-600 mb-6">
                  I&apos;ve been working in mental health for over 20 years, and in that time, I&apos;ve learned that healing from trauma and addiction isn&apos;t about following a template—it&apos;s about meeting you exactly where you are and helping you move forward at your own pace.
                </p>
                <p className="text-gray-600 mb-6">
                  My background includes work in hospital emergency rooms, community mental health centers, and specialized trauma clinics. I&apos;ve worked with individuals and families dealing with everything from acute crisis situations to long-term recovery. This experience taught me that people don&apos;t need someone to fix them—they need someone who can handle the tough conversations, understand the complexity of trauma and addiction, and help them build real, sustainable change.
                </p>
                <p className="text-gray-600">
                  I went back to school specifically to earn a master&apos;s degree in addiction counseling because I kept seeing how deeply trauma and substance use are connected. Very few therapists specialize in both, but in my experience, you can&apos;t effectively treat one without addressing the other. That&apos;s what I do—I help people untangle the connection between their past experiences and current struggles, so healing can actually stick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Professional Credentials & Training
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-brand-purple mb-4">
                Education
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    <strong>CAGS</strong> (Certificate of Advanced Graduate Study), Mental Health Counseling - Rivier University
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    <strong>MS</strong>, Substance Abuse/Addiction Counseling - Grand Canyon University
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    <strong>M.Ed.</strong>, Counseling - University of New Hampshire
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    <strong>BA</strong>, Psychology - Queens College
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-brand-purple mb-4">
                Licenses & Certifications
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    Licensed Mental Health Counselor (LMHC) - New Hampshire
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    Licensed Mental Health Counselor (LMHC) - Massachusetts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>
                    CANS (Child and Adolescent Needs and Strengths) Certified
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-brand-purple mb-4">
              Clinical Experience Highlights
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>20+ years in mental health and counseling</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>Crisis intervention and ER psychiatric services</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>Specialized trauma clinic experience (4+ years)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>Adolescent addiction treatment (IOP facilitation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>Community mental health and case management</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>Teaching experience (psychology instructor)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Therapeutic Philosophy
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              After 20+ years of doing this work, I&apos;ve learned that effective therapy requires balance. Yes, I&apos;ll meet you where you are with compassion and understanding. But I&apos;ll also be honest with you and hold you accountable to the changes you want to make. You deserve both warmth and truthfulness—not one or the other.
            </p>
            <p className="mb-6">
              My approach comes from working in some tough environments—emergency rooms, crisis situations, families involved with child protective services, people on probation. I&apos;ve learned to handle difficult conversations without judgment, and very little surprises me anymore. That experience means I can create a safe space for you to talk about the hard stuff, without you having to worry about shocking me or being too much.
            </p>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">
              Core Values
            </h3>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-brand-purple/5 p-4 rounded-lg">
                <h4 className="font-bold text-brand-purple mb-2">
                  Compassion & Non-Judgment
                </h4>
                <p className="text-gray-600">
                  Creating a safe space where you can explore difficult
                  experiences without shame or judgment.
                </p>
              </div>

              <div className="bg-brand-pink/5 p-4 rounded-lg">
                <h4 className="font-bold text-brand-pink mb-2">
                  Evidence-Based Practice
                </h4>
                <p className="text-gray-600">
                  Utilizing proven therapeutic approaches backed by research and
                  clinical effectiveness.
                </p>
              </div>

              <div className="bg-brand-purple/5 p-4 rounded-lg">
                <h4 className="font-bold text-brand-purple mb-2">
                  Client-Centered Care
                </h4>
                <p className="text-gray-600">
                  Tailoring treatment to your unique needs, goals, and pace of
                  healing.
                </p>
              </div>

              <div className="bg-brand-pink/5 p-4 rounded-lg">
                <h4 className="font-bold text-brand-pink mb-2">
                  Cultural Sensitivity
                </h4>
                <p className="text-gray-600">
                  Honoring your background, identity, and lived experiences as
                  integral to your healing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            My Therapeutic Approach
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-8">
              I integrate multiple evidence-based therapeutic modalities to
              create a personalized treatment plan that addresses your specific
              needs. My approach is trauma-informed, meaning I recognize how
              past experiences shape present behaviors and work collaboratively
              with you to promote healing and resilience.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Trauma-Informed Care
                </h3>
                <p>
                  I use evidence-based approaches including Cognitive Behavioral
                  Therapy (CBT), Eye Movement Desensitization and Reprocessing
                  (EMDR), and somatic techniques to help you process traumatic
                  experiences, reduce distressing symptoms, and reclaim a sense
                  of safety and control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Addiction & Recovery
                </h3>
                <p>
                  My addiction treatment approach combines motivational
                  interviewing, relapse prevention strategies, and exploration
                  of underlying factors contributing to substance use. Together,
                  we'll work to build sustainable coping skills and address the
                  root causes of addiction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Holistic Healing
                </h3>
                <p>
                  I recognize that mental health is interconnected with
                  physical, emotional, and spiritual wellbeing. Our work
                  together may address relationships, self-care, mindfulness,
                  and lifestyle factors that support your overall health and
                  recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-pink py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a consultation to learn more about how therapy can support
            your healing.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-white text-brand-purple px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-xl"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
