import React from 'react';
import SlideItem from './slider/SlideItem';
import Slideshow from './slider/header/Slideshow';

function Header() {
  const test =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,laborum libero natus dolores repellat odio nobis eius magnam officiaipsa.';

  const heads = [
    {
      img: '/header/cat-01.png',
      head: 'อะไรก็ยอม',
      content: test,
    },
    {
      img: '/header/cat-02.png',
      head: 'ยอมไม่ได้',
      content: test,
    },
    {
      img: '/header/cat-01.png',
      head: 'อะไรก็ยอม',
      content: test,
    },
  ];
  return (
    <>
      <Slideshow heads={heads} />
    </>
  );
}

export default Header;
