import { useState, useEffect } from "react";

const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`;

type ConversionRates = {
  [key: string]: number;
};

export const useCurrencyRates = () => {
  const [rates, setRates] = useState<ConversionRates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(
            `Error fetching conversion rates: ${response.statusText}`,
          );
        }
        const data = await response.json();
        setRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching conversion rates:", error);
        setError("Failed to fetch conversion rates");
      } finally {
        setLoading(false);
      }
    };

    fetchConversionRates();
  }, []);

  return { rates, loading, error };
};
