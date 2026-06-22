'use client';

import { useState } from 'react';
import { Button } from './Button';
import { trackEvent } from '@/lib/gtag';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseType: string;
  description: string;
  preferredContact: string;
  _gotcha: string; // honeypot, rendered off-screen, must stay empty
};

type FieldError = Partial<Record<keyof FormState, string>>;

const CASE_TYPES = [
  'Benefits-Based Immigration',
  'Removal Defense',
  'Federal Litigation',
  'Not Sure / Other',
];

function validate(f: FormState): FieldError {
  const errors: FieldError = {};
  if (!f.firstName.trim()) errors.firstName = 'First name is required.';
  if (!f.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!f.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!f.phone.trim()) errors.phone = 'Phone number is required.';
  if (!f.caseType) errors.caseType = 'Please select a case type.';
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
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
          case_type: form.caseType,
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
          An attorney will be in touch within 24 hours.
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

      {/* Case Type */}
      <div>
        <label htmlFor="caseType" className="block text-sm font-semibold text-navy font-sans mb-1">
          Case Type <span aria-hidden="true">*</span>
        </label>
        <select
          id="caseType"
          name="caseType"
          required
          value={form.caseType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('caseType')}
          aria-describedby={errors.caseType ? 'err-caseType' : undefined}
        >
          <option value="">Select a case type…</option>
          {CASE_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.caseType && (
          <p id="err-caseType" className="text-xs text-crimson mt-1">{errors.caseType}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-navy font-sans mb-1">
          Brief description of your situation <span className="text-charcoal/50 font-normal">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className="w-full border border-warmgray-300 bg-white rounded px-3 py-2 text-charcoal font-sans text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold resize-y"
        />
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
      </div>

      {status === 'error' && (
        <p className="text-sm text-crimson">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <p className="text-xs text-charcoal/50 font-sans">
        We never share your information. Submitting this form does not create an attorney-client
        relationship.
      </p>
    </form>
  );
}
