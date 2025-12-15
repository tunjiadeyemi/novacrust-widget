import { cryptoCurrencies } from './constant';

export function getErrors({
  payAmount,
  receiveAmount,
  payCurrency,
  receiveCurrency,
  payFrom,
  payTo
}: {
  payAmount: string;
  receiveAmount: string;
  payCurrency: string;
  receiveCurrency: string;
  payFrom: string;
  payTo: string;
}): string[] {
  const errs: string[] = [];
  if (!payAmount || isNaN(Number(payAmount)) || Number(payAmount) <= 0) {
    errs.push('Enter a valid pay amount.');
  }
  if (!receiveAmount || isNaN(Number(receiveAmount)) || Number(receiveAmount) <= 0) {
    errs.push('Enter a valid receive amount.');
  }
  if (!payCurrency) {
    errs.push('Select a pay currency.');
  }
  if (!receiveCurrency) {
    errs.push('Select a receive currency.');
  }
  if (!payFrom) {
    errs.push('Select a pay from option.');
  }
  if (!payTo) {
    errs.push('Select a pay to option.');
  }
  return errs;
}

export function getRateForCurrency(currency: string) {
  const found = cryptoCurrencies.find((c) => c.code === currency || c.name === currency);
  return found?.rate || 1;
}

export function getReciprocalAmount(
  value: string,
  direction: 'payToReceive' | 'receiveToPay',
  rate: number
) {
  const num = parseFloat(value);
  if (isNaN(num)) return '';
  if (direction === 'payToReceive') {
    return (num * rate).toFixed(2);
  } else {
    return (num / rate).toFixed(6);
  }
}
