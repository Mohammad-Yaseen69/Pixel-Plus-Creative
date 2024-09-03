import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceObj = [
  {
    title: "Logo Design",
    description: "Creating unique and memorable logos that represent your brand's identity."
  },
  {
    title: "Branding",
    description: "Developing cohesive branding materials, including business cards, letterheads, and more."
  },
  {
    title: "Social Media Graphics",
    description: "Designing engaging graphics for your social media platforms to boost your online presence."
  },
  {
    title: "Print Design",
    description: "Crafting eye-catching brochures, flyers, posters, and other printed materials."
  },
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly website designs."
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly interfaces for web and mobile applications."
  }
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div id='services' className='w-full relative py-16'>
      <h1 className='font-bold my-12 text-5xl font-montserrat text-center'>What I Offer?</h1>
      <div className='grid place-items-center p-4 sm:p-7 gap-3 sm:gap-5 xs:grid-cols-2 lg:grid-cols-3 w-full'>
        {serviceObj.map((item, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className='w-full h-[200px] justify-center p-4 sm:p-7 rounded-xl bg-gray-100 shadow-neumorphism hidden sm:flex flex-col gap-3'
          >
            <h1 className='font-RaleWay font-bold text-2xl lg:text-3xl'>{item.title}</h1>
            <p className='font-openSans font-semibold text-sm lg:text-lg'>{item.description}</p>
          </div>
        ))}

        {serviceObj.map((item, index) => (
          <div
            key={index}
            className='w-full h-[200px] justify-center p-4 sm:p-7 rounded-xl bg-gray-100 shadow-neumorphism flex sm:hidden flex-col gap-3'
          >
            <h1 className='font-RaleWay font-bold text-2xl lg:text-3xl'>{item.title}</h1>
            <p className='font-openSans font-semibold text-sm lg:text-lg'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
