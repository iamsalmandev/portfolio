import classes from './about.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <h2 data-aos="slide-right">About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos="fade-right">
            <h3>
              Moved by the desire to work with something creative I began
              learning Web Development in 2017.
            </h3>
            <p>
              A MERN stack developer and Blockchain Enthusiast, with more than
              five years of working experience. I have a good understanding of
              typescript, javascript, ES6, React.js, React Native, web3, and a
              fair knowledge of good coding practices i.e separation of
              concerns, encapsulation and code splitting.
            </p>

            <p>
              I have a knack for writing clean and maintainable code, and for
              this, I religiously follow GitHub, open source community and code
              documentations. I always write code with extensibility,
              scalability and reusability in mind. Here is my code sample to
              reflect my coding style:
              https://github.com/iamsalmandev/gif-search-app
            </p>

            <p>
              Besides web development, I am very passionate about travelling. I
              got the cahnce to travell across the hilly terrains of Northern
              areas of Pakistan. I am no stranger to multiculturalism and I
              appreciate diversity as well as discovering and experiencing new
              cultures. Loving nature and being outdoors makes my favorite
              pastime hiking and mountain climbing.
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src="/images/profile-pic-2.webp"
                width={600}
                height={600}
                alt="profile-pic"
                data-aos="fade-left"
              />
            </div>
            <div className={classes.quote} data-aos="fade-right">
              &quot;Perspective is everything and everything starts with a
              dot.&quot;
              <span className={classes.tooltip}>
                In case you were wondering about my logo...{' '}
                <Image
                  src="/images/icons/mindblown.png"
                  alt="mindblown"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
