import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';

const ArunPortfolio = () => {
  return (
    <div>
      Welcome to my projects
      <br />
      <Link to={'/'}>
        <Button>App</Button>
      </Link>
    </div>
    // dont forget to add this component in Router.jsx as new route
  );
};
export default ArunPortfolio;
