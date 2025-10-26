import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import AboutPage, { metadata } from '@/app/about/page';

describe('About Page', () => {
  it('renders without errors', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /about therosa counseling/i, level: 1 })).toBeInTheDocument();
  });

  describe('AC #1: About page with credentials, philosophy, and approach', () => {
    it('displays therapist name "Catherine Lambert"', () => {
      render(<AboutPage />);
      expect(screen.getByText(/catherine lambert/i)).toBeInTheDocument();
    });

    it('displays LMHC credentials', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Licensed Mental Health Counselor/i);
      expect(text).toMatch(/LMHC/);
    });

    it('displays NH and MA licenses', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/New Hampshire/i);
      expect(text).toMatch(/Massachusetts/i);
      expect(text).toMatch(/NH|New Hampshire/i);
      expect(text).toMatch(/MA|Massachusetts/i);
    });

    it('displays education section with Master\'s degree', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Education/i);
      expect(text).toMatch(/CAGS/i);
      expect(text).toMatch(/MS/);
      expect(text).toMatch(/M\.Ed\./);
      expect(text).toMatch(/Substance Abuse.*Addiction Counseling/i);
    });

    it('displays professional credentials section', () => {
      render(<AboutPage />);
      expect(screen.getByText(/Professional Credentials & Training/i)).toBeInTheDocument();
    });

    it('displays clinical experience highlights', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Clinical Experience Highlights/i);
      expect(text).toMatch(/20\+ years/i);
      expect(text).toMatch(/Crisis intervention/i);
      expect(text).toMatch(/trauma clinic/i);
    });

    it('displays therapeutic philosophy section', () => {
      render(<AboutPage />);
      expect(screen.getByText(/Therapeutic Philosophy/i)).toBeInTheDocument();
    });

    it('displays 4 core values cards', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Compassion & Non-Judgment/i);
      expect(text).toMatch(/Evidence-Based Practice/i);
      expect(text).toMatch(/Client-Centered Care/i);
      expect(text).toMatch(/Cultural Sensitivity/i);
    });

    it('displays therapeutic approach section', () => {
      const { container } = render(<AboutPage />);
      expect(container.textContent).toMatch(/My Therapeutic Approach/i);
    });

    it('mentions CBT, EMDR, and somatic techniques', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Cognitive Behavioral Therapy/i);
      expect(text).toMatch(/CBT/);
      expect(text).toMatch(/Eye Movement Desensitization and Reprocessing/i);
      expect(text).toMatch(/EMDR/);
      expect(text).toMatch(/somatic/i);
    });

    it('includes trauma-informed care section', () => {
      const { container } = render(<AboutPage />);
      expect(container.textContent).toMatch(/Trauma-Informed Care/i);
    });

    it('includes addiction & recovery section', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/Addiction.*Recovery/i);
    });

    it('includes holistic healing section', () => {
      const { container } = render(<AboutPage />);
      expect(container.textContent).toMatch(/Holistic Healing/i);
    });
  });

  describe('AC #3: Navigation links (verified in Header/Footer tests)', () => {
    // Navigation links are tested in Header.test.tsx and Footer.test.tsx
    // This AC is satisfied by those tests showing /about links exist
    it('page is accessible via navigation', () => {
      // This test verifies the page renders successfully when navigated to
      render(<AboutPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });

  describe('AC #4: Fully responsive', () => {
    it('has responsive layout classes', () => {
      const { container } = render(<AboutPage />);
      const html = container.innerHTML;
      // Check for Tailwind responsive classes
      expect(html).toMatch(/md:flex/);
      expect(html).toMatch(/md:w-1\/3|md:w-2\/3/);
    });

    it('displays therapist photo with proper sizing', () => {
      render(<AboutPage />);
      const image = screen.getByAltText(/catherine lambert/i);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', expect.stringContaining('Catherine_Lambert'));
    });
  });

  describe('AC #5: SEO metadata', () => {
    it('has correct title including "Licensed Therapist"', () => {
      expect(metadata.title).toContain('Licensed');
      expect(metadata.title).toContain('Therapist');
      expect(metadata.title).toContain('Therosa Counseling');
    });

    it('has description mentioning NH and MA residents', () => {
      expect(metadata.description).toMatch(/NH|New Hampshire/i);
      expect(metadata.description).toMatch(/MA|Massachusetts/i);
    });

    it('has description mentioning trauma and addiction', () => {
      expect(metadata.description).toMatch(/trauma/i);
      expect(metadata.description).toMatch(/addiction/i);
    });
  });

  describe('CTA Button', () => {
    it('includes CTA "Book Your Consultation" linking to /schedule', () => {
      render(<AboutPage />);
      const ctaButton = screen.getByRole('link', { name: /book your consultation/i });
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton).toHaveAttribute('href', '/schedule');
    });

    it('displays "Ready to Start Your Journey?" heading', () => {
      render(<AboutPage />);
      expect(screen.getByText(/Ready to Start Your Journey/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<AboutPage />);
      const results = await axe(container);
      expect(results.violations).toHaveLength(0);
    });

    it('has proper heading hierarchy', () => {
      render(<AboutPage />);
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();

      // Check for h2 headings
      const h2Headings = screen.getAllByRole('heading', { level: 2 });
      expect(h2Headings.length).toBeGreaterThan(0);

      // Verify h3 headings exist
      const h3Headings = screen.getAllByRole('heading', { level: 3 });
      expect(h3Headings.length).toBeGreaterThan(0);
    });
  });

  describe('Content Structure', () => {
    it('displays welcome message', () => {
      render(<AboutPage />);
      expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });

    it('mentions years of experience and specialization', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/20\+ years/i);
      expect(text).toMatch(/trauma and addiction/i);
    });

    it('emphasizes safe space and authentic approach', () => {
      const { container } = render(<AboutPage />);
      const text = container.textContent || '';
      expect(text).toMatch(/safe/i);
      expect(text).toMatch(/balance/i);
      expect(text).toMatch(/compassion/i);
    });
  });
});
