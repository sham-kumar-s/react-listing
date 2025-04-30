// import { useQuery } from '@tanstack/react-query';
// import { useCallback, useState } from 'react';

// import api from '@/api';
// import ListingFilters from '@/components/ListingFilters';
// import ListingList from '@/components/ListingList';
// import { Button, Separator, Spinner } from '@/components/ui';

// const HomePage = () => {
//   const [filters, setFilters] = useState({
//     dates: undefined,
//     guests: 0,
//     search: '',
//   });

//   const [count, setCount] = useState(0);

//   const fetchListings = async () => {
//     const response = await api.get('/api/listings', { params: filters });
//     return response.data;
//   };

//   const {
//     data: listings,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['listings', filters],
//     queryFn: fetchListings,
//     staleTime: 2 * 60 * 1000,
//   });

//   // const handleFilters = (filters) => {
//   //   setFilters(filters);
//   // };

//   const handleFilters = useCallback(
//     (filters) => {
//       setFilters(filters);
//     },
//     [filters],
//   );

//   return (
//     <div className='container py-4'>
//       <div className='mb-4'>
//         <ListingFilters onChange={handleFilters} />
//         <Separator className='my-4' />
//         <Button onClick={() => setCount((c) => c + 1)}></Button>
//       </div>

//       {isLoading ? (
//         <div className='flex justify-center'>
//           <Spinner size='lg' />
//         </div>
//       ) : error ? (
//         <div className='text-center'>{`Error: ${error.message}`}</div>
//       ) : (
//         <ListingList listings={listings} />
//       )}
//     </div>
//   );
// };

// export default HomePage;
import { useCallback, useMemo, useState } from 'react';

import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Button, Separator, Spinner } from '@/components/ui';
import useFetch from '/src/hooks/UseFetch';

const HomePage = () => {
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  // const [count, setCount] = useState(0);

  console.log('home');
  const options = useMemo(() => 
  ({params : filters})
  , [filters],);

  // const options = () => {
  //   filters;
  // };

  const {
    data: listings,
    error,
    isLoading,
  } = useFetch('/api/listings', options);

  const handleFilters = useCallback(
    (filters) => {
      setFilters(filters);
    },
    [filters],
  );

  // const handleFilters = (filters) => {
  //   setFilters(filters);
  // };

  const renderListingList = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      );
    }

    if (error) {
      return <div className='text-center'>{error}</div>;
    }

    return <ListingList listings={listings} />;
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
        {/* <Button onClick={() => setCount((c) => c + 1)}></Button> */}
      </div>
      {renderListingList()}
    </div>
  );
};

export default HomePage;
