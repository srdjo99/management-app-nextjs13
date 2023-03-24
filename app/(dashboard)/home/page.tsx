import { Suspense } from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { delay } from '@/lib/async';
import { getUserFromCookie } from '@/lib/auth';
import { db } from '@/lib/db';

export default function Home() {
  return (
    <div className='h-full pr-6 overflow-y-auto w-1/1'>
      <div className='h-full items-stretch justify-center min-h-[content]'>
        <div className='flex flex-1 gor'></div>
        <div className='flex flex-wrap items-center mt-3 -m-3 flex-2 grow'>
          <div className='w-1/3 p-3'></div>
        </div>
        <div className='flex w-full mt-6 flex-2 grow'>
          <div className='w-full'></div>
        </div>
      </div>
    </div>
  );
}
