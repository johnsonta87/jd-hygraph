import Image from "next/image";

type Props = {
  src: string;
};

export function SVGBanner({ src }: Props) {
  return (
    <div className="w-full">
      <Image
        className="w-full h-auto max-w-full"
        src={src}
        width={150}
        height={150}
        alt="image description"
      />
    </div>
  );
}
