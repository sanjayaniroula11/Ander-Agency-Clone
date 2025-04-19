import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll('span');

    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0.5 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: word,
            start: `top center+=${index * 5}`,
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    });
  }, []);

  const text = "i am a boy and she is a girl. she is girl because she is a girl.";
  const splitWords = text.split(' ');

  return (
    <div className="pt-[20vh] px-4">
      <p ref={paragraphRef} className="text-xl mx-7">
        {splitWords.map((word, idx) => (
          <span key={idx} className="opacity-50 mr-2 inline-block">
            {word}
          </span>
        ))}
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ScrollText;
