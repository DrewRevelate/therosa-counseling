import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Common Questions About Therapy | Therosa Counseling',
  description: 'Answers to frequently asked questions about fees, insurance, online therapy sessions, and the counseling process at Therosa Counseling.',
};

export default function FAQPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-purple/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Find answers to common questions about therapy, fees, insurance, and our online counseling process
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Getting Started */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-8">
              Getting Started
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-purple pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do I schedule my first appointment?
                </h3>
                <p className="text-gray-600">
                  You can schedule your initial consultation through our online booking system or by contacting us directly via phone or email. We'll work with you to find a time that fits your schedule. Initial consultations typically last 50-60 minutes.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What should I expect in my first session?
                </h3>
                <p className="text-gray-600">
                  Your first session is an opportunity for us to get to know each other. We'll discuss what brought you to therapy, your goals, and your background. I'll also explain how therapy works, answer any questions you have, and together we'll determine if we're a good fit. There's no pressure—this is a collaborative process.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you see clients in person or only online?
                </h3>
                <p className="text-gray-600">
                  Therosa Counseling operates as an online-only practice. All sessions are conducted via secure, HIPAA-compliant telehealth platforms. This allows for convenient, accessible care from the comfort and privacy of your own space.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Who can receive services from Therosa Counseling?
                </h3>
                <p className="text-gray-600">
                  Services are available exclusively to residents of New Hampshire and Massachusetts, as I am licensed to practice in these states. At this time, I work with adults (18+) seeking support for trauma, addiction, and related mental health concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Fees & Insurance */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-pink mb-8">
              Fees & Insurance
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-pink pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much do sessions cost?
                </h3>
                <p className="text-gray-600 mb-3">
                  Session fees are determined on an individual basis and discussed during your initial consultation. Payment is due at the time of service.
                </p>
                <p className="text-gray-600">
                  We believe quality mental health care should be accessible, and we're happy to discuss flexible payment options if cost is a concern.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you accept insurance?
                </h3>
                <p className="text-gray-600 mb-3">
                  Insurance acceptance varies. Please contact us directly to discuss your specific insurance plan and coverage options. We can provide you with a superbill (detailed receipt) that you may be able to submit to your insurance company for potential out-of-network reimbursement.
                </p>
                <p className="text-gray-600">
                  Many insurance plans offer out-of-network benefits that can help offset the cost of therapy. We're happy to help you understand your benefits.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What forms of payment do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept major credit cards, debit cards, and HSA/FSA cards. Payment is processed securely through our HIPAA-compliant payment system.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What is your cancellation policy?
                </h3>
                <p className="text-gray-600">
                  We require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand that emergencies happen, and we'll work with you on a case-by-case basis.
                </p>
              </div>
            </div>
          </div>

          {/* Online Therapy Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-8">
              Online Therapy Process
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-purple pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is online therapy as effective as in-person therapy?
                </h3>
                <p className="text-gray-600">
                  Yes! Research consistently shows that online therapy (also called telehealth or teletherapy) is just as effective as in-person therapy for most concerns, including trauma and addiction. Online therapy offers the added benefits of convenience, accessibility, and the comfort of receiving care in your own environment.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What technology do I need for online sessions?
                </h3>
                <p className="text-gray-600 mb-3">
                  You'll need:
                </p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    A device with a camera and microphone (computer, tablet, or smartphone)
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    A reliable internet connection
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    A private, quiet space where you can speak freely
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    Access to our secure telehealth platform (link provided upon booking)
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is online therapy confidential and secure?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We use HIPAA-compliant telehealth platforms that encrypt all communications to protect your privacy. Your information is kept strictly confidential according to ethical and legal standards, with only limited exceptions (such as risk of harm to self or others).
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What if I have technical difficulties during a session?
                </h3>
                <p className="text-gray-600">
                  Technical issues can occasionally happen. If we lose connection during a session, I'll call you at the phone number you provided. We'll troubleshoot together, and if needed, we can continue the session by phone or reschedule for a time that works for both of us.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long are therapy sessions?
                </h3>
                <p className="text-gray-600">
                  Standard sessions are 50-60 minutes. The initial consultation may run slightly longer to allow adequate time for assessment and questions. Session length and frequency are discussed collaboratively based on your needs and goals.
                </p>
              </div>
            </div>
          </div>

          {/* Treatment & Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-pink mb-8">
              Treatment & Process
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-pink pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long will I need to be in therapy?
                </h3>
                <p className="text-gray-600">
                  The length of therapy varies greatly depending on your individual needs, goals, and circumstances. Some people find significant relief in a few months, while others benefit from longer-term support. We'll regularly check in about your progress and adjust the treatment plan as needed. You're always in control of when you feel ready to conclude therapy.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How often should I attend sessions?
                </h3>
                <p className="text-gray-600">
                  Most clients benefit from weekly sessions, especially at the beginning of treatment. As progress is made, some clients transition to bi-weekly or monthly sessions. We'll work together to determine the frequency that best supports your goals and fits your schedule.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What if I'm in crisis or have an emergency?
                </h3>
                <p className="text-gray-600 mb-3">
                  If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room immediately.
                </p>
                <p className="text-gray-600 mb-3">
                  For crisis support, you can also contact:
                </p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2">•</span>
                    <span><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2">•</span>
                    <span><strong>Crisis Text Line:</strong> Text HOME to 741741</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2">•</span>
                    <span><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (substance use support)</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you prescribe medication?
                </h3>
                <p className="text-gray-600">
                  As a licensed mental health counselor, I do not prescribe medication. However, I can work collaboratively with your psychiatrist or primary care physician if medication is part of your treatment plan. I can also provide referrals to psychiatric services if needed.
                </p>
              </div>

              <div className="border-l-4 border-brand-pink/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can family members or partners join sessions?
                </h3>
                <p className="text-gray-600">
                  While my primary focus is individual therapy, there may be times when it's beneficial to include a partner or family member in a session (with your consent). We can discuss this option if it aligns with your treatment goals.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Confidentiality */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-8">
              Privacy & Confidentiality
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-purple pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is everything I say in therapy confidential?
                </h3>
                <p className="text-gray-600 mb-3">
                  Yes, with limited exceptions required by law. What you share in therapy is protected by confidentiality and HIPAA privacy regulations. I will not share information about you without your written consent.
                </p>
                <p className="text-gray-600 mb-3">
                  Legal exceptions to confidentiality include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    Risk of harm to yourself or others
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    Suspected abuse or neglect of a child, elderly person, or disabled person
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">•</span>
                    Court orders requiring disclosure
                  </li>
                </ul>
                <p className="text-gray-600 mt-3">
                  If any of these situations arise, I will discuss it with you whenever possible before taking action.
                </p>
              </div>

              <div className="border-l-4 border-brand-purple/30 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How is my information stored and protected?
                </h3>
                <p className="text-gray-600">
                  All client records are stored electronically in a HIPAA-compliant, encrypted system. We use secure communication platforms for all telehealth sessions. Your information is protected with the highest level of security and privacy standards.
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help. Contact us or schedule a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-brand-purple px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/schedule"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
