const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

/**
 * Format value in USD
 *
 * @param value
 * @returns {string} The formatted value in USD
 */
export const USDFormatter = (value: number) => formatter.format(value);
