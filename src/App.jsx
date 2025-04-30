import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';

import Devbar from '@/components/Devbar/Devbar';

import HomePage from './pages/ReactQueryHome';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>

      <div className='ml-[700px]'>
        <QueryClientProvider client={queryClient}>
          <Outlet />

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
{
  /* <>
      <div className='lg-[700px]'>
        <HomePage />
      </div>
    </> */
}
