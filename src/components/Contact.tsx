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
  { icon: Mail, label: 'Email', href: `mailto:${personal.email}`, text: personal.email },
  { icon: Github, label: 'GitHub', href: socials.github, text: 'GitHub Profile' },
  { icon: Linkedin, label: 'LinkedIn', href: socials.linkedin, text: 'LinkedIn Profile' },
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
    <section id="contact" className="py-24 sm:py-32 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something Great"
          subtitle="Have an idea, project, or business problem that needs a digital solution? Let's talk."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-100 mb-4">Get in Touch</h3>
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.label !== 'Email' ? '_blank' : undefined}
                  rel={option.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-100">{option.label}</div>
                    <div className="text-xs text-zinc-500">{option.text}</div>
                  </div>
                </a>
              );
            })}

            {socials.whatsapp && (
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100">WhatsApp</div>
                  <div className="text-xs text-zinc-500">Chat on WhatsApp</div>
                </div>
              </a>
            )}
          </div>

          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6">
            <h3 className="text-base font-semibold text-zinc-100 mb-4">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-2">Message Received</h4>
                <p className="text-sm text-zinc-400">Thank you for reaching out. I will get back to you soon.</p>
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
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border bg-zinc-800/30 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 ${
                      errors.name ? 'border-red-500/50' : 'border-zinc-800'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border bg-zinc-800/30 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 ${
                      errors.email ? 'border-red-500/50' : 'border-zinc-800'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-400 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className={`w-full px-3 py-2 rounded-lg border bg-zinc-800/30 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-zinc-800'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full">
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
