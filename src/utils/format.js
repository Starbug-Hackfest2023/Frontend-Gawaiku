export function thousandSeparator(value, isCurrency = false) {
  const currencyFormat = {
    currency: 'IDR',
    maximumFractionDigits: 5,
    minimumFractionDigits: 0,
    roundingPriority: 'morePrecision',
    style: 'currency',
  };
  const nf = new Intl.NumberFormat('id-ID', isCurrency && currencyFormat);
  if (value === 0) {
    return nf.format(0);
  }
  return value ? nf.format(value) : '-';
}
