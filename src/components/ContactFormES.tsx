'use client';

import { useState } from 'react';
import { Button } from './Button';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseType: string;
  description: string;
  preferredContact: string;
  _gotcha: string;
};

type FieldError = Partial<Record<keyof FormState, string>>;

const CASE_TYPES_ES = [
  'Inmigración por Beneficios',
  'Defensa contra la Deportación',
  'Litigios Federales',
  'No estoy seguro/a / Otro',
];

function validate(f: FormState): FieldError {
  const errors: FieldError = {};
  if (!f.firstName.trim()) errors.firstName = 'El nombre es requerido.';
  if (!f.lastName.trim()) errors.lastName = 'El apellido es requerido.';
  if (!f.email.trim()) {
    errors.email = 'El correo electrónico es requerido.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = 'Por favor ingrese una dirección de correo electrónico válida.';
  }
  if (!f.phone.trim()) errors.phone = 'El número de teléfono es requerido.';
  if (!f.caseType) errors.caseType = 'Por favor seleccione un tipo de caso.';
  return errors;
}

export function ContactFormES() {
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
        body: JSON.stringify({ ...form, locale: 'es' }),
      });
      if (res.ok) {
        setStatus('success');
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
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">Gracias.</h3>
        <p className="text-charcoal/80">
          Una abogada se comunicará con usted dentro de las próximas 24 horas.
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
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="_gotcha_es">Deje esto en blanco</label>
        <input
          id="_gotcha_es"
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
          <label htmlFor="es-firstName" className="block text-sm font-semibold text-navy font-sans mb-1">
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input
            id="es-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('firstName')}
            aria-describedby={errors.firstName ? 'err-es-firstName' : undefined}
          />
          {errors.firstName && (
            <p id="err-es-firstName" className="text-xs text-crimson mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="es-lastName" className="block text-sm font-semibold text-navy font-sans mb-1">
            Apellido <span aria-hidden="true">*</span>
          </label>
          <input
            id="es-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('lastName')}
            aria-describedby={errors.lastName ? 'err-es-lastName' : undefined}
          />
          {errors.lastName && (
            <p id="err-es-lastName" className="text-xs text-crimson mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="es-email" className="block text-sm font-semibold text-navy font-sans mb-1">
          Correo Electrónico <span aria-hidden="true">*</span>
        </label>
        <input
          id="es-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('email')}
          aria-describedby={errors.email ? 'err-es-email' : undefined}
        />
        {errors.email && (
          <p id="err-es-email" className="text-xs text-crimson mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="es-phone" className="block text-sm font-semibold text-navy font-sans mb-1">
          Número de Teléfono <span aria-hidden="true">*</span>
        </label>
        <input
          id="es-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('phone')}
          aria-describedby={errors.phone ? 'err-es-phone' : undefined}
        />
        {errors.phone && (
          <p id="err-es-phone" className="text-xs text-crimson mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Case Type */}
      <div>
        <label htmlFor="es-caseType" className="block text-sm font-semibold text-navy font-sans mb-1">
          Tipo de Caso <span aria-hidden="true">*</span>
        </label>
        <select
          id="es-caseType"
          name="caseType"
          required
          value={form.caseType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputCls('caseType')}
          aria-describedby={errors.caseType ? 'err-es-caseType' : undefined}
        >
          <option value="">Seleccione un tipo de caso…</option>
          {CASE_TYPES_ES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.caseType && (
          <p id="err-es-caseType" className="text-xs text-crimson mt-1">{errors.caseType}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="es-description" className="block text-sm font-semibold text-navy font-sans mb-1">
          Descripción breve de su situación{' '}
          <span className="text-charcoal/50 font-normal">(opcional)</span>
        </label>
        <textarea
          id="es-description"
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
          Método de contacto preferido
        </legend>
        <div className="flex gap-6">
          {[
            { value: 'phone', label: 'Teléfono' },
            { value: 'email', label: 'Correo electrónico' },
            { value: 'either', label: 'Cualquiera' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-charcoal font-sans cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={opt.value}
                checked={form.preferredContact === opt.value}
                onChange={handleChange}
                className="accent-gold"
              />
              {opt.label}
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
          {status === 'submitting' ? 'Enviando…' : 'Programar Mi Consulta'}
        </Button>
      </div>

      {status === 'error' && (
        <p className="text-sm text-crimson">
          Algo salió mal. Por favor intente de nuevo o llámenos directamente.
        </p>
      )}

      <p className="text-xs text-charcoal/50 font-sans">
        Nunca compartimos su información. El envío de este formulario no crea una relación
        abogado-cliente.
      </p>
    </form>
  );
}
