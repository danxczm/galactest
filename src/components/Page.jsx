import { useLocation } from 'react-router-dom';
import contentMap from '../utils/pageContent';
import AnimationPage from './AnimationPage';
import { useMemo } from 'react';

const Page = () => {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');

  const content = useMemo(() => {
    return contentMap[page]?.content || null;
  }, [page]);

  return (
    <main className="page">
      <AnimationPage>
        <div className="page__wrapper">{content}</div>
      </AnimationPage>
    </main>
  );
};

export default Page;
