import {
  BabyIcon,
  DollarSign,
  DollarSignIcon,
  FacebookIcon,
  Pin,
  TwitchIcon,
  TwitterIcon,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui';
import { getImageUrl } from '@/lib/utils/images';

import ListingCardImages from './ListingCardImages';

const ListingCard = ({ listing }) => {
  return (
    <div>
      <Link to={`/listings/${listing.id}`}>
        <Card className='w-[320px]'>
          {/* <img src={`/src/assets/${listing.images[0]}`} /> */}
          <ListingCardImages listing={listing} />
          {/* <img
          className='h-[200px] w-full rounded-md object-cover'
          src={getImageUrl(listing.images[0])}
        /> */}

          <CardContent className='p-4'>
            <h2 className='mb-0 text-xl font-semibold'>{listing.name}</h2>
            <div className='flex items-center gap-2'>
              <DollarSignIcon className='h-4 w-4 text-primary' />
              <span className='text-muted-foreground'>
                <span className='font-bold text-foreground'>
                  {listing.price}{' '}
                </span>
                / Night
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Pin className='h-4 w-4 text-primary' />
              <span className='text-muted-foreground'>
                {listing.location.name}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='h-4 w-4 text-primary' />
              <span className='text-muted-foreground'>
                {listing.maxGuests} Guests
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ListingCard;
