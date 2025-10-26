'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/layout';
import { GoogleCalendarEmbed } from '@/components/scheduling/GoogleCalendarEmbed';

export default function SchedulePage() {
  const [hasAttested, setHasAttested] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [showError, setShowError] = useState(false);

  const handleAttestation = () => {
    if (!selectedState) {
      setShowError(true);
      return;
    }
    setHasAttested(true);
    setShowError(false);
  };

  const resetAttestation = () => {
    setHasAttested(false);
    setSelectedState('');
    setShowError(false);
  };

  if (!hasAttested) {
    return (
      <MainLayout>
        <section className="min-h-screen bg-gradient-to-br from-brand-purple/3 via-white to-brand-pink/3 py-16 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-dashed border-brand-purple/20 rounded-full -rotate-12" aria-hidden="true"></div>

          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-brand-purple/20 p-8 md:p-10">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-purple backdrop-blur mb-4">
                  Step 1 of 2
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  Schedule Your Consultation
                </h1>
                <p className="text-lg text-gray-600">
                  Before booking, please confirm your state of residence
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 border-l-4 border-brand-purple rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-7 h-7 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-bold text-brand-purple mb-3 text-lg">
                      Service Area Requirement
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Therosa Counseling is licensed to provide online therapy services exclusively to residents of New Hampshire and Massachusetts. Due to state licensure regulations, we cannot provide services to residents of other states at this time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="state" className="block text-base font-semibold text-gray-900 mb-3">
                    I confirm that I am a resident of:
                  </label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setShowError(false);
                    }}
                    className={`w-full px-5 py-4 border-2 rounded-xl text-base focus:ring-4 focus:ring-brand-purple/20 focus:border-brand-purple transition-all ${
                      showError && !selectedState ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <option value="">-- Please select your state --</option>
                    <option value="NH">New Hampshire</option>
                    <option value="MA">Massachusetts</option>
                  </select>
                  {showError && !selectedState && (
                    <p className="mt-3 text-sm text-red-600 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Please select your state of residence to continue
                    </p>
                  )}
                </div>

                <div className="bg-white border-2 border-brand-purple/15 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong className="text-brand-purple">Self-Attestation:</strong> By selecting your state and proceeding, you are confirming that you are currently a resident of the state you selected. This attestation is required to comply with professional licensure regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAttestation}
                  className="w-full bg-brand-purple text-white px-8 py-5 rounded-xl hover:bg-[#8B3589] transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Continue to Scheduling
                </button>

                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Not a resident of NH or MA?{' '}
                  <a href="/contact" className="text-brand-purple hover:text-brand-pink font-semibold underline decoration-brand-purple/30 hover:decoration-brand-pink transition-colors">
                    Contact us
                  </a>{' '}
                  for assistance finding services in your area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="bg-gradient-to-br from-[#F7F1EC] via-white to-[#FBF7F1] py-16 relative overflow-hidden min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-purple mb-4">
              Step 2 of 2
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Book Your Consultation
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Confirmed resident of <span className="font-semibold text-brand-purple">{selectedState === 'NH' ? 'New Hampshire' : 'Massachusetts'}</span>
            </p>
            <button
              onClick={resetAttestation}
              className="text-sm text-brand-purple hover:text-brand-pink font-semibold underline decoration-brand-purple/30 hover:decoration-brand-pink transition-colors"
            >
              Change state selection
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-brand-purple/15 p-6 md:p-8 mb-10">
            <GoogleCalendarEmbed />
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-brand-purple/15 p-8 md:p-10">
            <h2 className="font-bold text-brand-purple text-2xl mb-8 text-center font-serif">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Initial Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your first session is 50-60 minutes and focuses on understanding your needs and goals for therapy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Online Sessions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All sessions are conducted via secure, HIPAA-compliant video conferencing from the comfort of your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Before Your Session</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You'll receive a confirmation email with the video link and instructions for accessing your session.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Questions?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Review our <a href="/faq" className="text-brand-purple hover:text-brand-pink font-semibold underline decoration-brand-purple/30 hover:decoration-brand-pink transition-colors">FAQ page</a> or contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
