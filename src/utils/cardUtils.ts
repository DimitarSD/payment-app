export const getCardType = (cardNumber: string): string => {
  const amexRegex = /^3[47]/; // Amex cards start with 34 or 37
  const mastercardRegex = /^5[1-5]/; // MasterCard cards starts with 51-55
  const visaRegex = /^4/; // Visa cards starts with 4

  const firstFewDigits = cardNumber.split("...")[0];

  if (amexRegex.test(firstFewDigits)) {
    return "amex";
  } else if (mastercardRegex.test(firstFewDigits)) {
    return "mastercard";
  } else if (visaRegex.test(firstFewDigits)) {
    return "visa";
  } else {
    return "unknown";
  }
};
