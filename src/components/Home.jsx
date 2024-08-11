import consulting from '../images/consulting.svg';
import traffic from '../images/traffic.svg';

const Home = () => {
  return (
    <main className="home">
      <div className="home__wrapper">
        <div className="home__inner">
          <div className="home__inner-image">
            <img src={consulting} alt="consulting" />
          </div>
          <div className="home__inner-info">
            <div className="home__inner-title">
              <h1>
                Lorem ipsum dolor sit amet consectetur. Mi cras{' '}
                <span className="bordered">non non quis.</span>
              </h1>
            </div>
            <div className="home__inner-text">
              Lorem ipsum dolor sit amet consectetur. Faucibus nunc et mattis at feugiat sagittis
              volutpat. At netus diam ipsum cras turpis imperdiet diam vel consequat. Ultrices in
              faucibus sodales sed sed. Enim aenean dignissim sed a non mollis. Sed ut arcu enim
              ullamcorper.
            </div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <ul className="marquee__inner-right marquee__inner-golden">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className={`marquee__item item-${i + 1}`}>
              {i % 2 === 0 ? <p>WE BUY TRAFFIC</p> : <img src={traffic} alt="WE BUY TRAFFIC" />}
            </li>
          ))}
        </ul>
        <ul className="marquee__inner-left marquee__inner-purple">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className={`marquee__item item-${i + 1}`}>
              {i % 2 === 0 ? <p>WE BUY TRAFFIC</p> : <img src={traffic} alt="WE BUY TRAFFIC" />}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
