interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    target: string | Date,
    params?: Record<string, unknown>,
  ) => void;
  dataLayer: unknown[];
}
