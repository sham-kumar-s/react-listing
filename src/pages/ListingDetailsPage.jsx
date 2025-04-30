import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import api from '@/api';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import { Spinner } from '@/components/ui';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  console.log(listingId);
  const fetchListings = async () => {
    const response = await api.get(`/api/listings/${listingId}`);

    return response.data;
  };

  const {
    data: listing,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['listing', listingId],
    queryFn: fetchListings,
    staleTime: 2 * 60 * 1000,
    // refetchOnMount: true,
  });

  return (
    <div className='container py-4'>
      {isLoading ? (
        <div className='flex justify-center'>
          <Spinner size='lg' />
        </div>
      ) : error ? (
        <div className='text-center'>{`Error: ${error.message}`}</div>
      ) : (
        <ListingDetailsCard listing={listing} />
      )}
    </div>
  );
};

export default ListingDetailsPage;
