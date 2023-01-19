import React from 'react';
import { useRouter } from 'next/router';

function Kid() {
  const router = useRouter();
  const { kid } = router.query;
  return <div></div>;
}

export default Kid;
