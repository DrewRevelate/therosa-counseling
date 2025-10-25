import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Consultation - Therosa Counseling',
  description: 'Book your initial consultation for trauma and addiction therapy. Online appointments available for NH and MA residents. HIPAA-compliant telehealth sessions.',
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
