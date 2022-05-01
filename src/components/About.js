import React from 'react';
import { useSelector } from 'react-redux';
import ShortLinks from './ShortLinks';

const About = () => {
  const linkList = useSelector((state) => state.linkList);

  return (
    <>
      {linkList.map((link, index) => (
        <ShortLinks
          key={index}
          originalLink={link.originalLink}
          shortenLink={link.shortenLink}
        />
      ))}
      <section className="about">
        <div className="about-head">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-cards-bg-line"></div>
          <div className="about-cards-div card1">
            <div>
              <img src="./images/icon-brand-recognition.svg" alt="" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links
              don&rsquo;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className="about-cards-div card2">
            <div>
              <img src="./images/icon-detailed-records.svg" alt="" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="about-cards-div card3">
            <div>
              <img src="./images/icon-fully-customizable.svg" alt="" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
