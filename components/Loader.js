import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="relative top-0 flex h-screen items-center justify-center">
      <div className=" absolute flex flex-col items-center justify-center">
        <Image
          src="/assets/images/bee-queen.gif"
          width="200px"
          height="200px"
          alt="Connecting..."
          id="qrcode"
        />
      </div>
    </div>
  );
};

export default Loader;
