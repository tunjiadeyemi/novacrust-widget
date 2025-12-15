import Dropdown from '../Form/Dropdown';

interface Option {
  code: string;
  name: string;
  src: string;
}

interface SelectionBubbleProps {
  label: string;
  amount: string;
  onAmountChange: (amount: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  options: Option[];
  placeholder?: string;
}

export default function SelectionBubble({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  options,
  placeholder = '0.00'
}: SelectionBubbleProps) {
  return (
    <div className="border border-[#E0E0E0] rounded-[30px] p-5 flex items-end justify-between gap-4">
      <div className="flex-1">
        <label className="text-[#828282] text-base font-medium block mb-3">{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="text-2xl font-semibold text-black border-none outline-none w-full bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder={placeholder}
        />
      </div>

      <Dropdown items={options} value={currency} onChange={onCurrencyChange} />
    </div>
  );
}
