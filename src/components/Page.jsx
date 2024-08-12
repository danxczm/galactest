import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import contentMap from '../utils/pageContent';
import AnimationPage from './AnimationPage';

const Page = () => {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const [content, setContent] = useState(null);

  useLayoutEffect(() => {
    const newContent = contentMap[page]?.content || null;
    setContent(newContent);
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
