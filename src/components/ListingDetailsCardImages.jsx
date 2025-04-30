import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { getImageUrl } from '@/lib/utils/images';

const ListingDetailsCardImages = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <img
        className='mb-4 h-[500px] w-full rounded-md object-cover'
        src={getImageUrl(listing.images[currentImageIndex])}
        alt={listing.name}
      />
      <Carousel className='mx-auto mb-4 w-[90%]'>
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem
              key={image}
              className='basis-1/3 cursor-pointer'
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className='h-52 w-full object-cover shadow-sm'
                src={getImageUrl(image)}
                alt={listing.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ListingDetailsCardImages;

// index	currentImageIndex	isSelected
// 0	1	false ❌
// 1	1	true ✅
// 2	1	false ❌
// So only the second image gets isSelected={true}.

// ✅ Why do we do this?
// That isSelected={true} is a way to visually highlight or apply special styling to the currently selected thumbnail — the one that's also being shown as the main image above.
