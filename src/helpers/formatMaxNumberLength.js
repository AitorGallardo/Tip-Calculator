export const formatMaxNumberLengthNoDots = (value, maxNumber = 2) => {
    // Remove all non-digit characters from the input string
    value = value.replace(/\D/g, '');
    return value.length > maxNumber ? value.slice(0, maxNumber) : value;
  };
export const formatMaxNumberLength = (value, maxNumber = 2) => {
    // Remove all non-digit characters from the input string
    value = value.replace(/[^0-9.]/g, '');
    return value.length > maxNumber ? value.slice(0, maxNumber) : value;
  };
  