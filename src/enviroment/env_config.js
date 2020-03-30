export const URL = process.env.URL || 'http://se-bff-empresas';
export const PORT = process.env.PORT || 8080;
export const BASE = process.env.BASE || 'api';

// REGISTRO BILLER
export const MS_REGISTROBILLER_URL = process.env.MS_REGISTROBILLER_URL || 'http://se-ms-registrobiller';
export const MS_REGISTROBILLER_BASE = process.env.MS_REGISTROBILLER_BASE || '/ms/se-ms-registrobiller';
export const MS_REGISTROBILLER_VERSION = process.env.MS_REGISTROBILLER_VERSION || 'v1';

// EMAIL
export const MS_EMAIL_URL = process.env.MS_EMAIL_URL || 'http://se-ms-email';
export const MS_EMAIL_BASE = process.env.MS_EMAIL_BASE || '/ms/se-ms-email';
export const MS_EMAIL_VERSION = process.env.MS_EMAIL_VERSION || 'v1';

// CONVENIOS Y RECAUDACION
export const MS_RECAUDACION_URL = process.env.MS_RECAUDACION_URL || 'urlaws'
export const MS_RECAUDACION_BASE = process.env.MS_RECAUDACION_BASE || 'ms/se-ms-recaudacion/v1/';
export const MS_RECAUDACION_VERSION = process.env.MS_RECAUDACION_VERSION || 'v1';
export const MS_RECAUDACION_API_URL = `${MS_RECAUDACION_URL}/${MS_RECAUDACION_BASE}/${MS_RECAUDACION_VERSION}`;