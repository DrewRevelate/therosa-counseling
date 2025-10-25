import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Header from '@/components/layout/Header';

describe('Header Component', () => {
  it('renders the site logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/Therosa Counseling/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo-full.png'));
  });

  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('has correct link href attributes', () => {
    render(<Header />);

    const homeLink = screen.getAllByRole('link', { name: /Home/i })[0];
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const servicesLink = screen.getByRole('link', { name: /Services/i });
    const contactLink = screen.getByRole('link', { name: /Contact/i });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
