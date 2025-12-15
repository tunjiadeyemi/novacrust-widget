import { Link, useLocation } from 'react-router';
import { useRef, useLayoutEffect, useState } from 'react';

import { tab } from '../../utils/constant';

const Tabs = () => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const tabEls = Array.from(container.querySelectorAll('[data-tab]'));
    const idx = tab.findIndex((item) => item.slug === activeTab);
    if (idx !== -1 && tabEls[idx]) {
      const el = tabEls[idx] as HTMLElement;
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className="relative bg-secondary w-full lg:w-[80%] h-auto mx-auto grid grid-cols-3 mt-2 items-center rounded-[30px]"
      style={{ overflow: 'hidden' }}
      role="tablist"
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-0 left-0 h-full bg-primary rounded-[30px] transition-all duration-300 z-0"
        style={{
          width: indicatorStyle.width,
          left: indicatorStyle.left
        }}
      />
      {tab.map((item, index) => (
        <Link
          to={item.slug}
          key={index}
          type="button"
          data-tab
          role="tab"
          aria-selected={activeTab === item.slug}
          tabIndex={activeTab === item.slug ? 0 : -1}
          className={`relative z-10 text-xs md:text-sm w-full h-8.5 flex items-center justify-center rounded-[30px] font-medium transition-all duration-300 ${
            activeTab === item.slug ? 'text-white' : 'text-[#828282]'
          } `}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
