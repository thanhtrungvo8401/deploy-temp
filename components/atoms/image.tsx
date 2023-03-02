import Image from 'next/image';

export default function MyImage(props: any = {}) {
  const { className = '', src = '', alt = '', ...imageProps } = props;
  return (
    <span className={`w-full h-full relative block ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{
          objectFit: 'contain'
        }}
        {...imageProps}
      />
    </span>
  );
}
