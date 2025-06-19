import React, { Suspense } from 'react';
import FullNewsPage from '@/components/FullNewsPage';

const page = () => {
  return (
    <Suspense fallback={<div>Загрузка..</div>}>
      <FullNewsPage />
    </Suspense>
  )
}

export default page