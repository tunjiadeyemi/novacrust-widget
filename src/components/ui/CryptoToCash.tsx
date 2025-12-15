import { useState } from 'react';

import Select from './Form/Select';
import SelectionBubble from './Transaction/SelectionBubble';

import { cryptoCurrencies, fiatCurrencies, payFromOptions } from '../../utils/constant';
import { getErrors, getRateForCurrency, getReciprocalAmount } from '../../utils/functions';
import PrimaryButton from './PrimaryButton';

const CryptoToCash = () => {
  const [payAmount, setPayAmount] = useState('1.00');
  const [payCurrency, setPayCurrency] = useState('ETH');

  const [receiveAmount, setReceiveAmount] = useState(
    getReciprocalAmount('1.00', 'payToReceive', 1000)
  );
  const [receiveCurrency, setReceiveCurrency] = useState('NGN');

  const [payFrom, setPayFrom] = useState('');
  const [payTo, setPayTo] = useState('');

  const errors = getErrors({
    payAmount,
    payCurrency,
    receiveAmount,
    receiveCurrency,
    payFrom,
    payTo
  });

  const handlePayAmountChange = (val: string) => {
    setPayAmount(val);
    const rate = getRateForCurrency(payCurrency);
    setReceiveAmount(getReciprocalAmount(val, 'payToReceive', rate));
  };

  const handleReceiveAmountChange = (val: string) => {
    setReceiveAmount(val);
    const rate = getRateForCurrency(payCurrency);
    setPayAmount(getReciprocalAmount(val, 'receiveToPay', rate));
  };

  const handlePayCurrencyChange = (currency: string) => {
    setPayCurrency(currency);
    const rate = getRateForCurrency(currency);
    setReceiveAmount(getReciprocalAmount(payAmount, 'payToReceive', rate));
  };

  const handleReceiveCurrencyChange = (currency: string) => {
    setReceiveCurrency(currency);
    const rate = getRateForCurrency(payCurrency);
    setPayAmount(getReciprocalAmount(receiveAmount, 'receiveToPay', rate));
  };

  return (
    <div className="flex flex-col gap-3 lg:gap-6 w-full h-full">
      <SelectionBubble
        label="You pay"
        amount={payAmount}
        onAmountChange={handlePayAmountChange}
        currency={payCurrency}
        onCurrencyChange={handlePayCurrencyChange}
        options={cryptoCurrencies}
      />

      <SelectionBubble
        label="You receive"
        amount={receiveAmount}
        onAmountChange={handleReceiveAmountChange}
        currency={receiveCurrency}
        onCurrencyChange={handleReceiveCurrencyChange}
        options={fiatCurrencies}
      />

      <Select label="Pay from" items={payFromOptions} value={payFrom} onChange={setPayFrom} />

      <Select label="Pay to" items={payFromOptions} value={payTo} onChange={setPayTo} />

      <PrimaryButton disabled={errors.length > 0} label="Convert now" />
    </div>
  );
};

export default CryptoToCash;
