import { useState } from 'react';

interface DropdownItem {
  code: string;
  name: string;
  src: string;
}

interface DropdownProps {
  items: DropdownItem[];
  value: string;
  onChange: (value: string) => void;
  width?: string;
  search?: boolean;
}

export default function Dropdown({
  items,
  value,
  onChange,
  width = 'w-[100px]',
  search = false
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedItem = items.find((item) => item.name === value);

  const filteredItems = search
    ? items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between ${width} gap-2 px-1.5 h-9 bg-[#F7F7F7] hover:bg-gray-150 rounded-[20px] transition-colors outline-none border border-[#E0E0E0]`}
      >
        <div className="flex items-center gap-1">
          <img src={selectedItem?.src} alt={selectedItem?.name} className="w-6 h-6" />
          <span className="text-sm clash-display-medium text-[#013941]">{value}</span>
        </div>

        <img
          src="/icons/chevron-down.svg"
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 flex flex-col gap-1 mt-1 w-66 bg-white rounded-[20px] border border-gray-200 z-20 p-2">
            {search && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 mb-2 text-sm text-primary border border-[#E0E0E0] rounded-[20px] outline-none"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            {filteredItems.length > 0 &&
              filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onChange(item.name);
                    setIsOpen(false);
                  }}
                  className={`w-full h-12 px-2 text-left hover:bg-[#F5F5F5] rounded-xl transition-colors flex items-center gap-3 ${
                    item.name === value ? 'bg-[#F5F5F5]' : ''
                  }`}
                >
                  <img src={item.src} alt={item.name} className="w-6 h-6" />

                  <span className="text-sm font-medium text-[#013941]">
                    {item.code} - {item.name}
                  </span>
                </button>
              ))}

            {filteredItems.length === 0 && (
              <div className="w-full h-10.5 flex items-center justify-center text-sm text-gray-500">
                No results found.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
