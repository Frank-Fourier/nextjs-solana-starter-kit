import React from "react";
import Image from 'next/image';

export type ItemData = {
  imageUrl: string;
  name: string;
  id: number;
};

type Props = {
  data: ItemData;
};

export function Item({ data }: Props) {
  const name = data.name;

  // These dimensions define the aspect ratio for the image
  const imageWidth = 320; // This is an example width
  const imageHeight = 180; // This is an example height to maintain a 16:9 aspect ratio

  return (
    <div className="card shadow-xl bg-neutral text-neutral-content">
      {data.imageUrl && (
        <figure className="relative h-80">
          {/* Image component with responsive layout */}
          <Image
            className="object-cover"
            src={data.imageUrl.startsWith('http') ? data.imageUrl : data.imageUrl}
            alt={`Picture of ${name}`}
            width={imageWidth}
            height={imageHeight}
            layout="responsive"
          />
        </figure>
      )}
      {/* Card body can be uncommented if needed */}
    </div>
  );
}
