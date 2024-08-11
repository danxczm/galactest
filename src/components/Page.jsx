import { useLocation } from 'react-router-dom';
import contentMap from '../utils/pageContent';
import AnimationPage from './AnimationPage';

const Page = () => {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  return (
    <main className="page">
      <AnimationPage>
        <div className="page__wrapper">{contentMap[page].content}</div>
      </AnimationPage>
    </main>
  );
};

export default Page;
