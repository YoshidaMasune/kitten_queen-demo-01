import React from 'react';
import YouTube from 'react-youtube';
// type Props = {};

const MyComponent = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId="q7EK3YQB5dA&t=760s" opts={opts} />;
};

function VidioSlide() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube videoId="q7EK3YQB5dA&t=760s" opts={opts} />
    </div>
  );
}

export default VidioSlide;
