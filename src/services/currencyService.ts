const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`;

export const fetchConversionRates = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        `Error fetching conversion rates: ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error("Error fetching conversion rates:", error);
    return null;
  }
};
