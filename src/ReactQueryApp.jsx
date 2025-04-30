import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Devbar from '@/components/Devbar/Devbar';

import HomePage from './pages/HomePage';

// Create a QueryClient instance
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        <QueryClientProvider client={queryClient}>
          <HomePage />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
