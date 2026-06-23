'use client';

import { useState } from 'react';
import { Button } from './Button';
import { trackEvent } from '@/lib/gtag';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  preferredContact: string;
  _gotcha: string; // honeypot, rendered off-screen, must stay empty
};

type FieldError = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): FieldError {
  const errors: FieldError = {};
  if (!f.firstName.trim()) errors.firstName = 'First name is required.';
  if (!f.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!f.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!f.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (f.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  // BAR-697 row 17: the case-type dropdown is gone; the open-ended description is
  // now the primary "what do you need" field and is required.
  if (!f.description.trim()) errors.description = 'Please tell us briefly how we can help.';
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    preferredContact: 'either',
    _gotcha: '',
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    const fieldErrors = validate(form);
    if (fieldErrors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormState] }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('contact_form_submit', {
          preferred_contact: form.preferredContact,
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-forest-green/10 border border-forest-green rounded-lg p-8 text-center">
        <span className="text-3xl mb-4 block" aria-hidden="true">✓</span>
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">Thank you.</h3>
        <p className="text-charcoal/80">
          Someone from our team will respond within 72 hours.
        </p>
        <p className="text-charcoal/60 text-sm mt-2">
          A confirmation has been sent to your email address.
        </p>
      </div>
    );
  }

  const inputCls = (field: keyof FormState) =>
    `w-full border rounded px-3 py-2 text-charcoal font-sans text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
      errors[field]
        ? 'border-crimson bg-crimson/5'
        : 'border-warmgray-300 bg-white'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot: hidden from real users, filled by bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="_gotcha">Leave this blank</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form._gotcha}
          onChange={handleChange}
        />
      </div>
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-navy font-sans mb-1">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('firstName')}
            aria-describedby={errors.firstName ? 'err-firstName' : undefined}
          />
          {errors.firstName && (
            <p id="err-firstName" className="text-xs text-crimson mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-navy font-sans mb-1">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('lastName')}
            aria-describedby={errors.lastName ? 'err-lastName' : undefined}
          />
          {errors.lastName && (
            <p id="err-lastName" className="text-xs text-crimson mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy font-sans mb-1">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('email')}
          aria-describedby={errors.email ? 'err-email' : undefined}
        />
        {errors.email && (
          <p id="err-email" className="text-xs text-crimson mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy font-sans mb-1">
          Phone Number <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(404) 555-0000"
          required
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('phone')}
          aria-describedby={errors.phone ? 'err-phone' : 'hint-phone'}
        />
        {errors.phone ? (
          <p id="err-phone" className="text-xs text-crimson mt-1">{errors.phone}</p>
        ) : (
          <p id="hint-phone" className="text-xs text-charcoal/50 mt-1">US or international format accepted</p>
        )}
      </div>

      {/* Describe your needs (BAR-697 row 17: replaces the case-type dropdown) */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-navy font-sans mb-1">
          Describe your immigration needs or your question <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          value={form.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us a little about your situation — for example, the kind of case you have, any deadlines or court dates, and what you'd like help with."
          className={`${inputCls('description')} resize-y`}
          aria-describedby={errors.description ? 'err-description' : undefined}
        />
        {errors.description && (
          <p id="err-description" className="text-xs text-crimson mt-1">{errors.description}</p>
        )}
      </div>

      {/* Preferred contact */}
      <fieldset>
        <legend className="block text-sm font-semibold text-navy font-sans mb-2">
          Preferred contact method
        </legend>
        <div className="flex gap-6">
          {(['phone', 'email', 'either'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm text-charcoal font-sans cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={v}
                checked={form.preferredContact === v}
                onChange={handleChange}
                className="accent-gold"
              />
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit */}
      <div>
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Schedule My Consultation'}
        </Button>
        <p className="text-sm text-charcoal/70 font-sans mt-2">
          We respond to every message within <strong>72 hours</strong>.
        </p>
      </div>

      {status === 'error' && (
        <p className="text-sm text-crimson">
          Something went wrong. Please try again or email us at info@bardilaw.com.
        </p>
      )}

      <p className="text-xs text-charcoal/50 font-sans">
        We never share your information. Submitting this form does not create an attorney-client
        relationship.
      </p>
    </form>
  );
}
