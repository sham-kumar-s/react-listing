import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import api from '@/api';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator, Spinner } from '@/components/ui';

const HomePage = () => {
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  // Define the query function to fetch listings
  const fetchListings = async () => {
    const response = await api.get('/api/listings', { params: filters });
    return response.data;
  };

  // Use the useQuery hook to fetch listings with filters
  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['listings', filters], // Only the query key, no array with filters
    queryFn: fetchListings, // The query function
    staleTime: 2 * 60 * 1000,
  });

  const handleFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>

      {isLoading ? (
        <div className='flex justify-center'>
          <Spinner size='lg' />
        </div>
      ) : error ? (
        <div className='text-center'>{`Error: ${error.message}`}</div>
      ) : (
        <ListingList listings={listings} />
      )}
    </div>
  );
};

export default HomePage;
