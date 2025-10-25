'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/layout';

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
        <section className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Schedule Your Consultation
                </h1>
                <p className="text-gray-600">
                  Before booking, please confirm your state of residence
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">
                      Service Area Requirement
                    </h3>
                    <p className="text-sm text-blue-800">
                      Therosa Counseling is licensed to provide online therapy services exclusively to residents of New Hampshire and Massachusetts. Due to state licensure regulations, we cannot provide services to residents of other states at this time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-3">
                    I confirm that I am a resident of:
                  </label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setShowError(false);
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                      showError && !selectedState ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">-- Please select your state --</option>
                    <option value="NH">New Hampshire</option>
                    <option value="MA">Massachusetts</option>
                  </select>
                  {showError && !selectedState && (
                    <p className="mt-2 text-sm text-red-600">
                      Please select your state of residence to continue
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Self-Attestation:</strong> By selecting your state and proceeding, you are confirming that you are currently a resident of the state you selected. This attestation is required to comply with professional licensure regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAttestation}
                  className="w-full bg-brand-purple text-white px-8 py-4 rounded-lg hover:bg-brand-pink transition-colors font-medium text-lg"
                >
                  Continue to Scheduling
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Not a resident of NH or MA?{' '}
                  <a href="/contact" className="text-brand-purple hover:text-brand-pink font-medium">
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Book Your Consultation
            </h1>
            <p className="text-gray-600">
              Confirmed resident of {selectedState === 'NH' ? 'New Hampshire' : 'Massachusetts'}
            </p>
            <button
              onClick={resetAttestation}
              className="mt-2 text-sm text-brand-purple hover:text-brand-pink font-medium"
            >
              Change state selection
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">
                    Google Workspace Scheduling Integration Pending
                  </h3>
                  <p className="text-sm text-yellow-800 mb-3">
                    The Google Workspace Appointment Scheduling tool will be embedded here once configured. This requires:
                  </p>
                  <ul className="text-sm text-yellow-800 space-y-1 ml-4">
                    <li>• Google Workspace account with Calendar scheduling enabled</li>
                    <li>• Appointment scheduling configuration in Google Calendar</li>
                    <li>• Embedding the scheduling page URL in this component</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Google Calendar Scheduling
              </h3>
              <p className="text-gray-600 mb-6">
                Once configured, the Google Workspace scheduling interface will appear here, allowing you to select from available appointment times.
              </p>
              <div className="space-y-3 max-w-md mx-auto text-sm text-gray-600">
                <p>In the meantime, please contact us to schedule your consultation:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg hover:bg-brand-pink transition-colors font-medium"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="inline-block bg-white text-brand-purple border-2 border-brand-purple px-6 py-3 rounded-lg hover:bg-brand-purple hover:text-white transition-colors font-medium"
                  >
                    Call (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Initial Consultation</h4>
                <p className="text-sm text-gray-600">
                  Your first session is 50-60 minutes and focuses on understanding your needs and goals for therapy.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Online Sessions</h4>
                <p className="text-sm text-gray-600">
                  All sessions are conducted via secure, HIPAA-compliant video conferencing from the comfort of your home.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Before Your Session</h4>
                <p className="text-sm text-gray-600">
                  You'll receive a confirmation email with the video link and instructions for accessing your session.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Questions?</h4>
                <p className="text-sm text-gray-600">
                  Review our <a href="/faq" className="text-brand-purple hover:text-brand-pink font-medium">FAQ page</a> or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
