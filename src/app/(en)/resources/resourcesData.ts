// BAR-697 Resources — shared data so the EN /resources and ES /es/resources
// pages stay in parity. Phase-2 batch 4 ships rows 34–36 (official government
// case tools as quick links). Rows 30–33 (blog/agency memo feeds), 37 (DOS Visa
// Bulletin import) and 38 (I-864P sponsor calculator) are larger builds that get
// added as additional sections here later.

export interface ResourceLink {
  /** English label */
  title: string;
  /** Spanish label */
  titleEs: string;
  /** English helper text */
  description: string;
  /** Spanish helper text */
  descriptionEs: string;
  /** Outbound URL */
  href: string;
  /** Human-readable domain shown on the card */
  domain: string;
}

// Rows 34–36: direct links to the official government self-service tools.
export const OFFICIAL_TOOLS: ResourceLink[] = [
  {
    title: 'Pay an ICE Immigration Bond',
    titleEs: 'Pagar una Fianza de Inmigración de ICE',
    description:
      'Pay an immigration bond online through the ICE Office of the Principal Legal Advisor (CeBONDS).',
    descriptionEs:
      'Pague una fianza de inmigración en línea a través de la oficina de ICE (CeBONDS).',
    href: 'https://cebonds.ice.gov/',
    domain: 'cebonds.ice.gov',
  },
  {
    title: 'Check My Next Hearing Date',
    titleEs: 'Consultar mi Próxima Fecha de Audiencia',
    description:
      'Look up your immigration court hearing date and judge with the EOIR Automated Case Information system.',
    descriptionEs:
      'Consulte la fecha de su audiencia y el juez en el sistema de Información Automatizada de Casos de EOIR.',
    href: 'https://acis.eoir.justice.gov/en/',
    domain: 'acis.eoir.justice.gov',
  },
  {
    title: 'Check My USCIS Case Status',
    titleEs: 'Consultar el Estado de mi Caso de USCIS',
    description:
      'Track the status of a pending application or petition using your USCIS receipt number.',
    descriptionEs:
      'Verifique el estado de una solicitud o petición pendiente con su número de recibo de USCIS.',
    href: 'https://egov.uscis.gov/casestatus/landing.do',
    domain: 'egov.uscis.gov',
  },
];
