import { useState, useEffect } from 'react';

export type Currency = 'INR' | 'USD';

const CURRENCY_STORAGE_KEY = 'pr_currency';
const CURRENCY_EVENT = 'pr_currency_changed';

export const getStoredCurrency = (): Currency => {
  if (typeof window === 'undefined') return 'INR';
  const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
  if (saved === 'USD' || saved === 'INR') return saved;
  return 'INR';
};

export const setStoredCurrency = (currency: Currency): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
  window.dispatchEvent(new CustomEvent(CURRENCY_EVENT, { detail: currency }));
};

export const useCurrency = (): [Currency, (c: Currency) => void] => {
  const [currency, setCurrencyState] = useState<Currency>(getStoredCurrency);

  useEffect(() => {
    const handleCurrencyChange = (e: Event) => {
      const customEvent = e as CustomEvent<Currency>;
      if (customEvent.detail === 'INR' || customEvent.detail === 'USD') {
        setCurrencyState(customEvent.detail);
      }
    };

    window.addEventListener(CURRENCY_EVENT, handleCurrencyChange);
    return () => window.removeEventListener(CURRENCY_EVENT, handleCurrencyChange);
  }, []);

  const updateCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    setStoredCurrency(newCurrency);
  };

  return [currency, updateCurrency];
};
