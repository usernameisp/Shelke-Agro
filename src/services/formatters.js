export function formatCurrency(value) {
  const isWholeNumber = Number.isInteger(value);

  return new Intl.NumberFormat('en-IN', {
    currency: 'INR',
    maximumFractionDigits: isWholeNumber ? 0 : 2,
    minimumFractionDigits: isWholeNumber ? 0 : 2,
    style: 'currency',
  }).format(value);
}
