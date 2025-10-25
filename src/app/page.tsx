import { MainLayout } from '@/components/layout';

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Welcome to Therosa Counseling
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Professional counseling services specializing in mental health support.
              We provide a safe, confidential space for healing and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-brand-purple text-white px-8 py-4 rounded-lg hover:bg-brand-pink transition-colors font-medium text-lg"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="inline-block bg-white text-brand-purple border-2 border-brand-purple px-8 py-4 rounded-lg hover:bg-brand-purple hover:text-white transition-colors font-medium text-lg"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
