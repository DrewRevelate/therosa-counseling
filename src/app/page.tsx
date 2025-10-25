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
      <section className="bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Compassionate Support for<br />
              <span className="text-brand-purple">Trauma & Addiction</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Professional online counseling services for residents of New Hampshire and Massachusetts
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              We provide a safe, confidential space for healing and personal growth through specialized trauma-informed and addiction-focused therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/schedule"
                className="inline-block bg-brand-purple text-white px-8 py-4 rounded-lg hover:bg-brand-pink transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                className="inline-block bg-white text-brand-purple border-2 border-brand-purple px-8 py-4 rounded-lg hover:bg-brand-purple hover:text-white transition-colors font-medium text-lg"
              >
                Learn More About Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert care tailored to your unique journey toward healing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-brand-purple">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Trauma Counseling
              </h3>
              <p className="text-gray-600">
                Evidence-based trauma-informed therapy to help you process difficult experiences, develop coping strategies, and reclaim your sense of safety and wellbeing.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-brand-pink">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Addiction Treatment
              </h3>
              <p className="text-gray-600">
                Compassionate, non-judgmental support for substance use challenges. We work together to build sustainable recovery and address underlying issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex md:items-center md:gap-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-brand-purple to-brand-pink rounded-full flex items-center justify-center text-white text-6xl font-serif">
                  T
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Professional, Confidential Care
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  As a licensed therapist specializing in trauma and addiction, I provide evidence-based, compassionate online therapy tailored to your individual needs.
                </p>
                <p className="text-gray-600 mb-6">
                  My approach combines trauma-informed care with proven therapeutic techniques to support your journey toward healing and recovery. Every session is conducted in a safe, non-judgmental environment designed to honor your experiences and empower your growth.
                </p>
                <a
                  href="/about"
                  className="text-brand-purple hover:text-brand-pink font-medium inline-flex items-center"
                >
                  Learn more about my background →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-pink py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule your initial consultation today. Available to residents of NH and MA.
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
