export const currencyFormat = (num, numDecimals, separator = ',') =>
  '$' +
  Number(num)
    .toFixed(numDecimals)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
