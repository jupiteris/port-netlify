export const EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const SPECIAL_CHARACTHER_REGX = /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const MAX_AMOUNT = 2_147_483_647;
export const LANGS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];
export const OPERATORS = ['>', '<', '>=', '<=', '==', '!=='];
export const APPROVAL_TYPES = ['Total', 'Joint', 'Indistinct'];
export const NOTIFICATIONS = [
  { id: 1, name: 'Assigned document' },
  { id: 2, name: 'Approval soon to expire' },
  { id: 4, name: 'Approval term expired' },
  { id: 8, name: 'Approved Document' },
  { id: 16, name: 'Rejected Document' },
  { id: 32, name: 'Reassigned Document' },
  // { id: 64, name: "Duplicated Document" },
  { id: 128, name: 'Unassigned Document' },
  { id: 256, name: 'Returned Document' },
  { id: 512, name: 'Paused Document' },
];
export const VOUCHER_ACTIONS = [
  'APPROVAL',
  'REJECTION',
  'PAUSING',
  'RETURNING',
  'ASSIGNING',
  'VOID_REJECTION_APPROVAL',
  'UNPAUSING',
];
export const VOUCHER_STATES = [
  { name: 'NOT ASSIGNED', id: 0 },
  { name: 'ASSIGNED', id: 1 },
  { name: 'APPROVED', id: 2 },
  { name: 'EXPIRED', id: 3 },
  { name: 'REJECTED', id: 4 },
  { name: 'PAUSED', id: 5 },
  { name: 'DISCARDED', id: 6 },
  { name: 'RETURNED', id: 7 },
];
export const VOUCHER_REASONS = [
  'Purchase Order Expired',
  'Damaged Goods',
  'Unauthorized Supplier',
  'Product/Service Not Received',
  'Price / Discount difference',
  'Calculation errors',
  'Due date error',
];
export const VOUCHER_TYPES = [
  { name: 'e-Ticket', id: 101 },
  { name: 'Nota de Crédito de e-Ticket', id: 102 },
  { name: 'Nota de Débito de e-Ticket', id: 103 },
  { name: 'e-Factura', id: 111 },
  { name: 'Nota de Crédito de e-Factura', id: 112 },
  { name: 'Nota de Débito de e-Factura', id: 113 },
  { name: 'e-Factura Exportación', id: 121 },
  { name: 'Nota de Crédito de e-Factura Exportación', id: 122 },
  { name: 'Nota de Débito de e-Factura Exportación', id: 123 },
  { name: 'e-Remito de Exportación', id: 124 },
  { name: 'e-Ticket Venta por Cuenta Ajena', id: 131 },
  { name: 'Nota de Crédito de e-Ticket Venta por Cuenta Ajena', id: 132 },
  { name: 'Nota de Débito de e-Ticket Venta por Cuenta Ajena', id: 133 },
  { name: 'e-Factura Venta por Cuenta Ajena', id: 141 },
  { name: 'Nota de Crédito de e-Factura Venta por Cuenta Ajena', id: 142 },
  { name: 'Nota de Débito de e-Factura Venta por Cuenta Ajena', id: 143 },
  { name: 'e-Boleta de entrada', id: 151 },
  { name: 'Nota de Crédito de e-Boleta de entrada', id: 152 },
  { name: 'Nota de Débito de e-Boleta de entrada', id: 153 },
  { name: 'e-Remito', id: 181 },
  { name: 'e-Resguardo', id: 182 },
  { name: 'E-Factura Contingencia', id: 211 },
];
export const VOUCHER_FINAL_STATES = [2, 4];
export const URL_HASH_KEY = 'hello world!';

export const WAY_TO_PAY = {
  1: 'Contado',
  2: 'Crédito',
};
export const VAT_PER_DAY = {
  0: '',
  1: 'No IVA al día',
};
export const IND_PAGTA_3_ROS = {
  0: '',
  1: 'Pagos por cuenta de terceros',
};
export const IND_COB_PROPIA = {
  0: '',
  1: 'Corbranza',
};
export const CAE_ESPECIAL = {
  1: 'Exonerado',
  2: 'IVA mínimo',
  3: 'Monotributo',
  4: 'Monotributo MIDES',
};
