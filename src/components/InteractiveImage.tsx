import Image from 'next/image';
import Link from 'next/link';

interface InteractiveImageProps {
  src: string;
  alt: string;
  text: string;
  linkHref: string;
  linkText: string;
}

export default function InteractiveImage({ src, alt, text, linkHref, linkText }: InteractiveImageProps) {
  return (
    <div className="flex">
      <div className="relative group w-full h-64 md:h-80">
        <Image
          src={src}
          alt={alt}
          fill
            objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-center font-bold">{text}</p>
          <Link href={linkHref} className="text-white text-center mt-2 hover:underline">{linkText}</Link>
        </div>
      </div>
    </div>
  );
}
