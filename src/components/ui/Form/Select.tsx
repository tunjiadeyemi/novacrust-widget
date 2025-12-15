import { useState } from 'react';

interface SelectItem {
  name: string;
  src: string;
}

interface SelectProps {
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
  width?: string;
  label?: string;
}

export default function Select({ items, value, onChange, width = 'w-full', label }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedItem = items.find((item) => item.name === value);

  return (
    <div className="relative">
      {label && <label className="text-[#013941] text-base font-medium block mb-3">{label}</label>}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between ${width} gap-2 px-5 h-15 rounded-[30px] transition-colors outline-none border border-[#E0E0E0]`}
      >
        <div className="flex items-center gap-4">
          {selectedItem && (
            <img src={selectedItem?.src} alt={selectedItem?.name} className="w-6 h-6" />
          )}
          <span className="text-base text-[#013941]">
            {selectedItem ? value : 'Select an option...'}
          </span>
        </div>

        <img
          src="/icons/chevron-down.svg"
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-full z-20">
            <div className="flex flex-col gap-1 w-[95%] mx-auto bg-white rounded-[20px] border border-gray-200 p-2">
              {items.length > 0 &&
                items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onChange(item.name);
                      setIsOpen(false);
                    }}
                    className={`w-full h-12 px-3 text-left hover:bg-[#F5F5F5] rounded-xl transition-colors flex items-center gap-3 ${
                      item.name === value ? 'bg-[#F5F5F5]' : ''
                    }`}
                  >
                    <img src={item.src} alt={item.name} className="w-6 h-6" />

                    <span className="text-sm font-medium text-[#013941]">{item.name}</span>
                  </button>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
