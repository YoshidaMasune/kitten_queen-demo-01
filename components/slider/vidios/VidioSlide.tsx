import React from 'react';

type Props = {};

function VidioSlide({}: Props) {
  return (
    <div className="container mx-auto overflow-x-auto">
      <div className="flex gap-5 ">
        <iframe
          width="600"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="450"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="450"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="450"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="450"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="450"
          height={200}
          src="https://www.youtube.com/embed/r-4JqG11wUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default VidioSlide;
