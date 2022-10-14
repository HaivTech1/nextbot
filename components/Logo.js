import Image from 'next/image'
import siteMetadata from "../utils/siteMetadata";

const Logo = (props) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image src="/assets/images/bee.jpg" alt="logo" width="50px" height="50px"  className='rounded-full'/>

      {siteMetadata.title}<sup>Lte</sup>
    </span>
  );
};

export { Logo };
