import { LazyLoadImage } from 'react-lazy-load-image-component';

import consulting from '../images/consulting.svg';
import deal from '../images/deal.svg';
import leads from '../images/leads.svg';

const contentMap = {
  '': {
    content: (
      <div className="page__inner">
        <div className="page__inner-image">
          <LazyLoadImage src={consulting} alt="consulting" effect="blur" />
        </div>
        <div className="page__inner-info">
          <div className="page__inner-title">
            <h1>
              Lorem ipsum dolor sit amet consectetur. Mi cras{' '}
              <span className="bordered">non non quis.</span>
            </h1>
          </div>
          <div className="page__inner-text">
            Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at feugiat sagittis
            volutpat. At netus diam ipsum cras turpis imperdiet diam vel consequat. Ultrices in
            faucibus sodales sed sed. Enim aenean dignissim sed a non mollis. Sed ut arcu enim
            ullamcorper.
          </div>
        </div>
      </div>
    ),
  },
  about: {
    content: (
      <div className="page__inner">
        <div className="page__inner-image">
          <LazyLoadImage src={deal} alt="deal" effect="blur" />
        </div>
        <div className="page__inner-info">
          <div className="page__inner-title">
            <h1>
              <span className="bordered">About us</span>
            </h1>
          </div>
          <div className="page__inner-text">
            Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in gravida dolor in.
            Elementum netus rhoncus sagittis nunc mi non egestas est. Aliquam maecenas in sed
            vestibulum neque feugiat pulvinar. Volutpat auctor a in sem vulputate aliquam tempor
            sit. Nulla urna felis penatibus ut cras sit.
          </div>
        </div>
      </div>
    ),
  },
  services: {
    content: (
      <div className="page__inner page__inner-reverse">
        <div className="page__inner-image">
          <LazyLoadImage src={leads} alt="leads" effect="blur" />
        </div>
        <div className="page__inner-info">
          <div className="page__inner-title">
            <h1>
              <span className="bordered">Services</span>
            </h1>
          </div>
          <div className="page__inner-text">
            Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in gravida dolor in.
            Elementum netus rhoncus sagittis nunc mi non egestas est. Aliquam maecenas in sed
            vestibulum neque feugiat pulvinar. Volutpat auctor a in sem vulputate aliquam tempor
            sit. Nulla urna felis penatibus ut cras sit.
          </div>
        </div>
      </div>
    ),
  },
};

export default contentMap;
