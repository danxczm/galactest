import traffic from '../images/traffic.svg';

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
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
    </div>
  );
};

export default Marquee;
