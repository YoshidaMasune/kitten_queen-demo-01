import React from 'react';
import { cat } from '@/data/cats';

type Props = {
  cat?: cat;
};

function Cat({ cat }: Props) {
  return <div>{cat?.bleed.eng}</div>;
}

export default Cat;
