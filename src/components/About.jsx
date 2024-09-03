import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftDivRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: leftDivRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      rightDivRef.current,
      { x: '100%' },
      {
        x: '0%',
        duration: 1.5,
        scrollTrigger: {
          trigger: rightDivRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          once: true,
        },
      }
    );
  }, []);

  return (
    <div id='about' className='w-full pl-4 sm:pl-16 lg:pl-0'>
      <div className='hidden sm:flex max-lg:flex-col overflow-hidden relative w-full items-center'>
        <div ref={leftDivRef} className='lg:w-1/2 py-16 px-2 lg:px-16 lg:py-16'>
          <h1 className='font-RaleWay font-bold text-3xl sm:text-5xl'>About Me</h1>
          <p className='mt-5 font-semibold text-sm sm:text-lg font-openSans'>
            I am a passionate and dedicated graphic designer with a fresh perspective on visual storytelling. My goal is to bring your ideas to life through creative and impactful designs. Whether you need a stunning logo, eye-catching social media graphics, or a complete brand overhaul, I bring a fresh and innovative approach to every project. I stay updated with the latest design trends and technologies to provide you with the best solutions. I am here to help you make a lasting impression.
          </p>
        </div>

        <div ref={rightDivRef} className='w-full lg:w-1/2 p-8 sm:p-16 h-full rounded-l-xl bg-[#17C3B2]'>
          <h1 className='font-RaleWay font-bold text-3xl sm:text-5xl'>My Journey</h1>
          <p className='mt-5 font-semibold text-sm sm:text-lg font-openSans'>
            I have honed my skills in various design tools and techniques. My education, combined with hands-on experience, has equipped me with the knowledge and creativity to tackle any design challenge. I am constantly inspired by the world around me and strive to incorporate that inspiration into my work.
          </p>
        </div>
      </div>

      <div className='flex sm:hidden max-lg:flex-col overflow-hidden relative w-full items-center'>
        <div className='lg:w-1/2 py-16 px-2 lg:px-16 lg:py-16'>
          <h1 className='font-RaleWay font-bold text-3xl sm:text-5xl'>About Me</h1>
          <p className='mt-5 font-semibold text-sm sm:text-lg font-openSans'>
            I am a passionate and dedicated graphic designer with a fresh perspective on visual storytelling. My goal is to bring your ideas to life through creative and impactful designs. Whether you need a stunning logo, eye-catching social media graphics, or a complete brand overhaul, I bring a fresh and innovative approach to every project. I stay updated with the latest design trends and technologies to provide you with the best solutions. I am here to help you make a lasting impression.
          </p>
        </div>

        <div className='w-full lg:w-1/2 p-8 sm:p-16 h-full rounded-l-xl bg-[#17C3B2]'>
          <h1 className='font-RaleWay font-bold text-3xl sm:text-5xl'>My Journey</h1>
          <p className='mt-5 font-semibold text-sm sm:text-lg font-openSans'>
            I have honed my skills in various design tools and techniques. My education, combined with hands-on experience, has equipped me with the knowledge and creativity to tackle any design challenge. I am constantly inspired by the world around me and strive to incorporate that inspiration into my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

