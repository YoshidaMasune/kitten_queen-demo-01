import { knowlage } from '@/data/knowlage';
import React from 'react';
import BlogLayout from '../blog/BlogLayout';
import HeadTitle from '../HeadTitle';

type Props = {
  data?: knowlage;
};

function Knowlage({ data }: Props) {
  return (
    <div>
      <h2>{data?.head}</h2>
      <p>{data?.content}</p>
      <img src={`${data?.img}`} alt="" />
    </div>
  );
}

export default Knowlage;
