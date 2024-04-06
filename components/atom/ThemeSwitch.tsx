'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdNightlight } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import Image from 'next/image';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="p-2">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={18}
          height={18}
          sizes="18x18"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      </div>
    );

  if (resolvedTheme === 'dark') {
    return (
      <div className="text-white-700 text-lg p-2" onClick={() => setTheme('light')}>
        <MdLightMode />
      </div>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <div className="text-white-700 text-lg p-2" onClick={() => setTheme('dark')}>
        <MdNightlight />
      </div>
    );
  }
}
