import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Footer from '@/components/layout/Footer';

describe('Footer Component', () => {
  it('renders company name and copyright', () => {
    render(<Footer />);
    const companyNames = screen.getAllByText(/Therosa Counseling/i);
    expect(companyNames.length).toBeGreaterThan(0);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /FAQ/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Schedule/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
  });

  it('has correct href attributes for all links', () => {
    render(<Footer />);

    const aboutLink = screen.getByRole('link', { name: /About/i });
    const servicesLink = screen.getByRole('link', { name: /Services/i });
    const faqLink = screen.getByRole('link', { name: /FAQ/i });
    const scheduleLink = screen.getByRole('link', { name: /Schedule/i });
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i });
    const termsLink = screen.getByRole('link', { name: /Terms of Service/i });

    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(faqLink).toHaveAttribute('href', '/faq');
    expect(scheduleLink).toHaveAttribute('href', '/schedule');
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(privacyLink).toHaveAttribute('href', '/privacy');
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('displays current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
