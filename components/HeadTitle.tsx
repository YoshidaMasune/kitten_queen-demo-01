import React from 'react';

interface headTitle {
  th?: string;
  eng?: string;
}

function HeadTitle({ th, eng }: headTitle) {
  return (
    <article className="w-fit text-center">
      <h2 className="text-yellow-700 text-xl">{eng}</h2>
      <h1 className="text-sky-600 text-4xl mt-5">{th}</h1>
    </article>
  );
}

export default HeadTitle;
