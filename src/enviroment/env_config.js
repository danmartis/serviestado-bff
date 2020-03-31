export const URL = process.env.URL || 'http://se-bff-empresas';
export const PORT = process.env.PORT || 8080;
export const BASE = process.env.BASE || '/bff/se-bff-empresas';

// INI VARIABLES DE ENTORNO
export const EMAIL_SOURCE_EMAIL_VERIFIED = process.env.EMAIL_SOURCE_EMAIL_VERIFIED || 'michael.ordonez@siigroup.cl';
export const EMAIL_TEMP_NAME_CLAVE_PROVISORIA = process.env.EMAIL_TEMP_NAME_CLAVE_PROVISORIA || 'seClaveProvisoria';
export const EMAIL_CONFIGURATION_NAME = process.env.EMAIL_CONFIGURATION_NAME || 'TestConfigEmail';
export const EMAIL_CONFIGURATION_API_URL = `${EMAIL_SOURCE_EMAIL_VERIFIED}/${EMAIL_TEMP_NAME_CLAVE_PROVISORIA}/${EMAIL_CONFIGURATION_NAME}`;
// FIN VARIABLES DE ENTORNO

// INI VARIABLES DE ENTORNO MS

// REGISTRO BILLER
export const MS_REGISTROBILLER_URL = process.env.MS_REGISTROBILLER_URL || 'http://se-ms-registrobiller';
export const MS_REGISTROBILLER_BASE = process.env.MS_REGISTROBILLER_BASE || 'ms/se-ms-registrobiller';
export const MS_REGISTROBILLER_VERSION = process.env.MS_REGISTROBILLER_VERSION || 'v1';
export const MS_REGISTROBILLER_API_URL = `${MS_REGISTROBILLER_URL}/${MS_REGISTROBILLER_BASE}/${MS_REGISTROBILLER_VERSION}`;

// EMAIL
export const MS_EMAIL_URL = process.env.MS_EMAIL_URL || 'http://se-ms-email';
export const MS_EMAIL_BASE = process.env.MS_EMAIL_BASE || 'ms/se-ms-email';
export const MS_EMAIL_VERSION = process.env.MS_EMAIL_VERSION || 'v1';
export const MS_EMAIL_API_URL = `${MS_EMAIL_URL}/${MS_EMAIL_BASE}/${MS_EMAIL_VERSION}`;

// CONVENIOS Y RECAUDACION
export const MS_RECAUDACION_URL = process.env.MS_RECAUDACION_URL || 'urlaws'
export const MS_RECAUDACION_BASE = process.env.MS_RECAUDACION_BASE || 'ms/se-ms-recaudacion';
export const MS_RECAUDACION_VERSION = process.env.MS_RECAUDACION_VERSION || 'v1';
export const MS_RECAUDACION_API_URL = `${MS_RECAUDACION_URL}/${MS_RECAUDACION_BASE}/${MS_RECAUDACION_VERSION}`;

// FIN VARIABLES DE ENTORNO MS