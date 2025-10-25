import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Therosa Counseling | Licensed Therapist for Trauma & Addiction',
  description: 'Learn about our licensed therapist specializing in trauma and addiction treatment. Evidence-based, compassionate care for NH and MA residents.',
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
            Dedicated to providing compassionate, evidence-based therapy for trauma and addiction
          </p>
        </div>
      </section>

      {/* Therapist Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:gap-12 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-brand-purple to-brand-pink rounded-lg flex items-center justify-center text-white text-8xl font-serif shadow-lg">
                T
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  [Therapist Name]
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
                  I am a licensed mental health counselor with specialized training and extensive experience in treating trauma and addiction. My practice is built on the foundation that healing is possible, and every person deserves compassionate, evidence-based care tailored to their unique journey.
                </p>
                <p className="text-gray-600">
                  Through online therapy sessions, I provide a safe, confidential space where you can explore your experiences, develop healthier coping strategies, and work toward lasting recovery and personal growth.
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
                  <span>Master's degree in Clinical Mental Health Counseling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Advanced training in trauma-informed care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Specialized certification in addiction counseling</span>
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
                  <span>Licensed Mental Health Counselor (LMHC) - New Hampshire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Licensed Mental Health Counselor (LMHC) - Massachusetts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Continuing education in evidence-based trauma treatment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-brand-purple mb-4">
              Professional Memberships
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>American Counseling Association (ACA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-purple mr-2">•</span>
                <span>National Board for Certified Counselors (NBCC)</span>
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
              I believe that healing from trauma and addiction requires more than just addressing symptoms—it requires understanding the whole person. My therapeutic approach is grounded in the belief that everyone has inherent strengths and the capacity for growth, even in the face of profound challenges.
            </p>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">
              Core Values
            </h3>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="border-l-4 border-brand-purple pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Compassion & Non-Judgment</h4>
                <p className="text-gray-600">
                  Creating a safe space where you can explore difficult experiences without shame or judgment.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Evidence-Based Practice</h4>
                <p className="text-gray-600">
                  Utilizing proven therapeutic approaches backed by research and clinical effectiveness.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Client-Centered Care</h4>
                <p className="text-gray-600">
                  Tailoring treatment to your unique needs, goals, and pace of healing.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Cultural Sensitivity</h4>
                <p className="text-gray-600">
                  Honoring your background, identity, and lived experiences as integral to your healing journey.
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
              I integrate multiple evidence-based therapeutic modalities to create a personalized treatment plan that addresses your specific needs. My approach is trauma-informed, meaning I recognize how past experiences shape present behaviors and work collaboratively with you to promote healing and resilience.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Trauma-Informed Care
                </h3>
                <p>
                  I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and somatic techniques to help you process traumatic experiences, reduce distressing symptoms, and reclaim a sense of safety and control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Addiction & Recovery
                </h3>
                <p>
                  My addiction treatment approach combines motivational interviewing, relapse prevention strategies, and exploration of underlying factors contributing to substance use. Together, we'll work to build sustainable coping skills and address the root causes of addiction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-3">
                  Holistic Healing
                </h3>
                <p>
                  I recognize that mental health is interconnected with physical, emotional, and spiritual wellbeing. Our work together may address relationships, self-care, mindfulness, and lifestyle factors that support your overall health and recovery.
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
            Schedule a consultation to learn more about how therapy can support your healing.
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
