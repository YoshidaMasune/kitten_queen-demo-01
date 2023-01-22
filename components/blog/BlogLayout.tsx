import React from 'react';
import HeadTitle from '../HeadTitle';

type Props = {
  children: any;
};

function BlogLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default BlogLayout;
