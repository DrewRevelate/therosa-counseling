import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Trauma & Addiction Therapy | Therosa Counseling',
  description: 'Specialized therapy services including trauma counseling, addiction treatment, and individual therapy. Evidence-based online care for NH and MA residents.',
};

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-purple/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Specialized, evidence-based therapy tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              At Therosa Counseling, I provide compassionate, professional online therapy services specializing in trauma and addiction treatment—because these two issues are often deeply connected. With over 20 years of clinical experience, including work in emergency rooms, crisis intervention, and specialized trauma clinics, I understand the complexity of what you&apos;re dealing with.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              All sessions are conducted via secure, HIPAA-compliant telehealth platforms and are available exclusively to residents of New Hampshire and Massachusetts.
            </p>
          </div>
        </div>
      </section>

      {/* Trauma Counseling Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:gap-12 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple/80 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Trauma Counseling
                </h2>
                <div className="h-1 w-20 bg-white/50 mb-4"></div>
                <p className="text-white/90">
                  Specialized support for healing from traumatic experiences
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Understanding Trauma-Informed Care
                </h3>
                <p className="text-gray-600 mb-6">
                  Trauma can profoundly impact your sense of safety, relationships, and overall wellbeing. Whether you've experienced a single traumatic event or ongoing traumatic stress, healing is possible with the right support.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  My Approach to Trauma Treatment
                </h4>
                <p className="text-gray-600 mb-4">
                  With over 4 years as a dedicated trauma clinician and additional crisis intervention experience in hospital emergency rooms, I&apos;ve worked with people dealing with everything from acute crisis situations to long-standing trauma. I use evidence-based, trauma-informed approaches that recognize the profound impact trauma has on the mind, body, and spirit. Treatment is tailored to your unique needs and proceeds at a pace that feels safe and manageable for you.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Therapeutic Modalities Include:
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps identify and change unhelpful thought patterns and behaviors related to trauma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Eye Movement Desensitization and Reprocessing (EMDR):</strong> Processes traumatic memories to reduce their emotional intensity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Somatic Experiencing:</strong> Addresses trauma stored in the body through mindfulness and body awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Narrative Therapy:</strong> Helps you reframe your trauma story in empowering ways</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Trauma Therapy Can Help With:
                </h4>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      PTSD and Complex PTSD
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Childhood trauma
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Sexual assault/abuse
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Domestic violence
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Grief and loss
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Accident or injury trauma
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Vicarious trauma
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-purple mr-2">✓</span>
                      Medical trauma
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Treatment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:gap-12 items-start md:flex-row-reverse">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-gradient-to-br from-brand-pink to-brand-pink/80 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Addiction Treatment
                </h2>
                <div className="h-1 w-20 bg-white/50 mb-4"></div>
                <p className="text-white/90">
                  Compassionate support for substance use and recovery
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Non-Judgmental Approach to Recovery
                </h3>
                <p className="text-gray-600 mb-6">
                  Addiction is a complex condition that affects individuals physically, emotionally, and socially. Recovery is not just about stopping substance use—it's about understanding the underlying causes, developing healthier coping strategies, and building a life worth living in recovery.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  My Approach to Addiction Treatment
                </h4>
                <p className="text-gray-600 mb-4">
                  I went back to school specifically to earn a master&apos;s degree in Substance Abuse/Addiction Counseling because I kept seeing how deeply trauma and addiction are connected. I&apos;ve also worked in intensive outpatient programs (IOP) with adolescents and adults in recovery. I provide evidence-based, compassionate care that treats addiction as a health condition, not a moral failing. We work collaboratively to understand your relationship with substances, identify triggers, and develop sustainable strategies for recovery.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Treatment Approaches Include:
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Motivational Interviewing:</strong> Explores ambivalence about change and strengthens motivation for recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Cognitive Behavioral Therapy for Addiction:</strong> Identifies and changes thought patterns that contribute to substance use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Relapse Prevention Planning:</strong> Develops personalized strategies to maintain recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Dual Diagnosis Treatment:</strong> Addresses co-occurring mental health conditions alongside addiction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-pink mr-2 mt-1">•</span>
                    <span className="text-gray-600"><strong>Mindfulness-Based Relapse Prevention:</strong> Uses mindfulness practices to manage cravings and triggers</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  We Can Help With:
                </h4>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Alcohol use disorder
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Drug addiction
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Prescription medication misuse
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Early recovery support
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Relapse prevention
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="text-brand-pink mr-2">✓</span>
                      Family support for addiction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-brand-purple mb-3">
                Individual Therapy
              </h3>
              <p className="text-gray-600">
                One-on-one sessions addressing a range of mental health concerns including anxiety, depression, stress management, and life transitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-brand-purple mb-3">
                Anxiety & Depression
              </h3>
              <p className="text-gray-600">
                Evidence-based treatment for anxiety disorders and depression, helping you develop coping skills and improve your quality of life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-brand-purple mb-3">
                Stress Management
              </h3>
              <p className="text-gray-600">
                Learn practical techniques for managing stress, improving work-life balance, and building resilience in challenging times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            What to Expect
          </h2>

          <div className="space-y-6">
            <div className="bg-brand-purple/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-purple mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600">
                Your first session is an opportunity to share your story, discuss your goals, and determine if we're a good fit. We'll explore your concerns, history, and what you hope to achieve through therapy.
              </p>
            </div>

            <div className="bg-brand-pink/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-pink mb-2">
                Personalized Treatment Plan
              </h3>
              <p className="text-gray-600">
                Together, we'll develop a treatment plan tailored to your unique needs, goals, and preferences. This plan will guide our work while remaining flexible as your needs evolve.
              </p>
            </div>

            <div className="bg-brand-purple/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-purple mb-2">
                Ongoing Sessions
              </h3>
              <p className="text-gray-600">
                Regular therapy sessions provide consistent support as you work toward your goals. Session frequency is determined collaboratively based on your needs, typically ranging from weekly to bi-weekly.
              </p>
            </div>

            <div className="bg-brand-pink/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-pink mb-2">
                Secure Online Platform
              </h3>
              <p className="text-gray-600">
                All sessions are conducted via HIPAA-compliant telehealth platforms, ensuring your privacy and confidentiality while providing convenient access to care from your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-pink py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Take the First Step Toward Healing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule your consultation today to discuss which services are right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="inline-block bg-white text-brand-purple px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-xl"
            >
              Book Your Consultation
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
