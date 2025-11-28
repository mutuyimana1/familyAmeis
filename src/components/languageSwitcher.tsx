'use client';

import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = async (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.refresh(); // reload UI with new language
  };

  return (
    <div className='flex gap-3'>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('rw')}>RW</button>
      <button onClick={() => changeLanguage('fr')}>FR</button>
    </div>
  );
}
