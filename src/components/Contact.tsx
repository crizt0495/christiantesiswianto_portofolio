'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { personal, socials } from '@/data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactOptions = [
  { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, text: personal.email, color: 'bg-accent' },
  { icon: Github, label: 'GitHub', href: socials.github, text: 'GitHub Profile', color: 'bg-text dark:bg-dark-text' },
  { icon: Linkedin, label: 'LinkedIn', href: socials.linkedin, text: 'LinkedIn Profile', color: 'bg-accent-vivid' },
];

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 nb-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          subtitle="Have an idea, project, or business problem that needs a digital solution? Let's talk."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-text dark:text-dark-text mb-4 uppercase tracking-tight">
              Get in Touch
            </h3>
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.label !== 'Email' ? '_blank' : undefined}
                  rel={option.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="nb-card-flat flex items-center gap-3 p-4 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_var(--color-shadow)] dark:hover:shadow-[5px_5px_0_var(--color-dark-shadow)] transition-all duration-150 group"
                >
                  <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center text-white shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text dark:text-dark-text">{option.label}</div>
                    <div className="text-xs text-text-secondary dark:text-dark-text-secondary">{option.text}</div>
                  </div>
                </a>
              );
            })}

            {socials.whatsapp && (
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-card-flat flex items-center gap-3 p-4 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_var(--color-shadow)] dark:hover:shadow-[5px_5px_0_var(--color-dark-shadow)] transition-all duration-150 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-green flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text dark:text-dark-text">WhatsApp</div>
                  <div className="text-xs text-text-secondary dark:text-dark-text-secondary">Chat on WhatsApp</div>
                </div>
              </a>
            )}
          </div>

          <div className="nb-card p-6">
            <h3 className="text-base font-bold text-text dark:text-dark-text mb-4 uppercase tracking-tight">
              Send a Message
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-lg bg-accent-green flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)]">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-bold text-text dark:text-dark-text mb-2 uppercase tracking-tight">
                  Message Received
                </h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  Thank you for reaching out. I will get back to you soon.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-text-secondary dark:text-dark-text-secondary mb-1.5 uppercase tracking-widest"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-lg border-3 bg-white dark:bg-dark-bg-card text-sm font-medium text-text dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg dark:focus:ring-offset-dark-bg ${
                      errors.name ? 'border-error' : 'border-border dark:border-dark-border'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs font-medium text-error mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-text-secondary dark:text-dark-text-secondary mb-1.5 uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-lg border-3 bg-white dark:bg-dark-bg-card text-sm font-medium text-text dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg dark:focus:ring-offset-dark-bg ${
                      errors.email ? 'border-error' : 'border-border dark:border-dark-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs font-medium text-error mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-text-secondary dark:text-dark-text-secondary mb-1.5 uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className={`w-full px-3 py-2.5 rounded-lg border-3 bg-white dark:bg-dark-bg-card text-sm font-medium text-text dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg dark:focus:ring-offset-dark-bg resize-none ${
                      errors.message ? 'border-error' : 'border-border dark:border-dark-border'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-error mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="accent" size="md" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
