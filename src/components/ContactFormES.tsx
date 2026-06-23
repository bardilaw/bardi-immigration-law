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
  _gotcha: string;
};

type FieldError = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): FieldError {
  const errors: FieldError = {};
  if (!f.firstName.trim()) errors.firstName = 'El nombre es requerido.';
  if (!f.lastName.trim()) errors.lastName = 'El apellido es requerido.';
  if (!f.email.trim()) {
    errors.email = 'El correo electrónico es requerido.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errors.email = 'Por favor ingrese una dirección de correo electrónico válida.';
  }
  if (!f.phone.trim()) {
    errors.phone = 'El número de teléfono es requerido.';
  } else if (f.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Por favor ingrese un número de teléfono válido.';
  }
  // BAR-697 fila 17: el menú de tipo de caso se eliminó; la descripción abierta
  // es ahora el campo principal y es obligatoria.
  if (!f.description.trim()) errors.description = 'Por favor cuéntenos brevemente cómo podemos ayudarle.';
  return errors;
}

export function ContactFormES() {
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
        body: JSON.stringify({ ...form, locale: 'es' }),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('contact_form_submit', {
          preferred_contact: form.preferredContact,
          locale: 'es',
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
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">Gracias.</h3>
        <p className="text-charcoal/80">
          Alguien de nuestro equipo le responderá dentro de las próximas 72 horas.
        </p>
        <p className="text-charcoal/60 text-sm mt-2">
          Se ha enviado una confirmación a su dirección de correo electrónico.
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

      {/* Describa sus necesidades (BAR-697 fila 17: reemplaza el menú de tipo de caso) */}
      <div>
        <label htmlFor="es-description" className="block text-sm font-semibold text-navy font-sans mb-1">
          Describa sus necesidades migratorias o su pregunta <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="es-description"
          name="description"
          rows={5}
          required
          value={form.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Cuéntenos un poco sobre su situación — por ejemplo, el tipo de caso que tiene, cualquier fecha límite o cita en la corte, y en qué le gustaría que le ayudemos."
          className={`${inputCls('description')} resize-y`}
          aria-describedby={errors.description ? 'err-es-description' : undefined}
        />
        {errors.description && (
          <p id="err-es-description" className="text-xs text-crimson mt-1">{errors.description}</p>
        )}
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
        <p className="text-sm text-charcoal/70 font-sans mt-2">
          Respondemos a cada mensaje dentro de <strong>72 horas</strong>.
        </p>
      </div>

      {status === 'error' && (
        <p className="text-sm text-crimson">
          Algo salió mal. Por favor intente de nuevo o escríbanos a info@bardilaw.com.
        </p>
      )}

      <p className="text-xs text-charcoal/50 font-sans">
        Nunca compartimos su información. El envío de este formulario no crea una relación
        abogado-cliente.
      </p>
    </form>
  );
}
