import React, { useEffect, useState } from 'react';
import styles from '../style';

const About = () => {
  const [showUnderscore, setShowUnderscore] = useState(true);

  // Function to toggle underscore blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore((prevShowUnderscore) => !prevShowUnderscore);
    }, 500); // Blink interval in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className={`flex flex-col justify-center items-center ${styles.paddingY}`}>
      <div style={{ position: 'relative' }}>
        <h1 className="text-center font-semibold text-white font-poppins text-[45px]">
          <span style={{ color: '#53dbfd' }}>
            owen
          </span>
          @VirtualBox:~$ whoami 
        </h1>
        <span className="font-poppins font-semibold text-[45px]" style={{ position: 'absolute', bottom: 0, left: 'calc(100% - -10px)', color: 'white' }}>
          {showUnderscore ? '_' : ''}
        </span>
      </div>
      
      <div className="relative flex flex-col xl:flex-row justify-left items-center">
        <img src="/racing.png" className="w-full xl:w-1/2 mt-20 h-auto relative z-[5] max-w-[400px] xl:max-w-none"/>
        <div className="absolute z-[0] w-1/2 h-full top-0 blue__gradient" />
      
        <div className="flex flex-col items-center md:items-start md:text-left xl:w-1/2 xl:pl-12">
          <h2 className="font-poppins font-semibold md:text-[50px] sm:text-[40px] leading-[70px] md:leading-[90px] text-white mb-2 md:mb-0">
            <span className="text-gradient">
              Cars to Code:
            </span>{" "}
          </h2>
          <p className="font-poppins text-[30] text-white max-w-[1500px]">
            I began racing go-karts at a national level at age 9, and when I was 14, transitioned from karts to cars. 
            Between 2019 and 2022 I pursued a seat in a pro-series, and in my final year of racing won the NP-01 Nation Championship at Laguna Seca, and
            won in my class at the 25-hours of Thunderhill. I also hold track records at Mid-Ohio, Utah Motorsports Complex,
            and Sebring. What I loved about motorsports, was that through that one sport, I was exposed to advanced marketing, engineering,
            and computer science topics. When I was 15, I built and programmed a set of tire temperature transducers with radio telemetry,
            and through this project was introduced to the world of computer science, which eventually transformed into a passion in and of itself.
          </p>
        </div>
      </div>



        <div className="flex flex-col items-center justify-center">

          <h2 className="font-poppins font-semibold md:text-[50px] sm:text-[40px] leading-[70px] md:leading-[90px] text-white mb-2 md:mb-0">
            <span style={{ color: '#53dbfd' }}>
              Hacker, Maker, Developer:
            </span>{" "}
          </h2>

          <p className="font-poppins text-[45] text-white max-w-[1500px]">
          I am currently studying Computer Science at UNC Chapel Hill. My interests lie primarily 
          in cyber security, specifically in reverse engineering and binary exploitation. I am a member of the UNC Chapel Hill Cyber Security
          CTF club, and spend time outside of class reverse engineering malware samples and working through CTF challenges. I also have a strong 
          interest in software developement, and am learning front and backend developement with the software developement society, TechX.
          </p>

        </div>

        <div className="relative flex flex-col md:flex-row justify-left items-center w-full max-w-screen-xl">

        <div className="flex flex-col items-center md:items-start md:text-left">

          <h2 className="font-poppins font-semibold md:text-[50px] sm:text-[40px] leading-[70px] md:leading-[90px] text-white mb-2 md:mb-0">
            <span className="text-gradient">
              Offline Interests:
            </span>{" "}
          </h2>

          <p className="font-poppins text-[30] text-white max-w-[1500px]">
          Beyond computer science, I am an avid rock climber and mountaineer. In 2023 I summited the Eiger, Monch, Jungfrau, and the Matterhorn, and spent
          30 days in the Wind River mountain range with NOLS. I am also a photographer, and video editor, with 4 years of experience doing freelance work.
          </p>
        </div>

      <div className=" md:ml-4 md:order-2">
        <img src="/climbing.png" className="w-[85%] mt-20 h-auto relative z-[5]"/>
        <div className="absolute z-0 w-1/2 h-full top-0 blue__gradient" />
      </div>
      </div>


    </section>
    
  );
};

export default About;
