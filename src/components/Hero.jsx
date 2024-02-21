import React from 'react';
import styles from '../style';

const Hero = () => (
  <section id="home" className={`flex flex-col justify-center items-center ${styles.paddingY}`}>

    <div className="relative flex flex-col md:flex-row justify-center items-center w-full max-w-screen-xl">

      <div className="flex flex-col items-center md:items-start md:text-left">
        <h1 className="font-poppins font-semibold md:text-[85px] sm:text-[75px] leading-[70px] md:leading-[90px] text-white mb-2 md:mb-0">
          <span className="text-gradient">
            Owen McAllister
          </span>{" "}
        </h1>

        <ul className="text-[50px] mt-40 font-poppins font-semibold text-gray-300 z-[5]">
          <li className="word_cloud">Student.</li>
          <li className="word_cloud ml-40">Hacker.</li>
          <li className="word_cloud">Climber.</li>
          <li className="word_cloud ml-40">Developer.</li>
          <li className="word_cloud">Creative.</li>
        </ul>
      </div>

      <div className="w-full md:w-auto md:ml-4 md:order-2">
        <img src="/src/assets/opener.png" className="w-full h-auto relative z-[5]" />
        <div className="absolute z-0 w-1/2 h-full top-0 blue__gradient" />
      </div>
      
    </div>
  </section>
)

export default Hero;
