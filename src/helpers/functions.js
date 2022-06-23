export function formatDecimal(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
  }).format(value);
}

export function formatPercent(value) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  }).format(value);
}

export function isValid(obj) {
  return obj !== undefined && Object.keys(obj).length > 0;
}
