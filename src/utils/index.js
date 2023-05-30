/** Truncate string length */
export const truncateString = (str, limit = 60) =>
  str?.length > limit ? `${str?.substring(0, limit)}...` : str;

export const truncateStringSmall = (str, limit = 25) =>
  str?.length > limit ? `${str?.substring(0, limit)}...` : str;

/** Parse number to CLP currency */
export const parseToCLPCurrency = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};

/** Parse CLP to UF */
export const clpToUf = (clpValue, ufValue) => {
  return (Math.round((clpValue / ufValue) * 100) / 100000).toFixed(2);
};

// Replace white spaces to string
export const replaceSpaces = (str) => str.replace(/\s/g, '%20');

export const parseRealtorDate = (currentTime) => {
  const date = new Date(currentTime);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');

  const parsedDate = `${day}/${month}/${year} ${hours}:${mins}`;
  return parsedDate;
};
