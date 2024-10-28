import React, { useEffect, useRef } from 'react';
import {
  Container,
  Navbar,
} from '@/components';

const Home = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty("--x", `${clientX}px`);
      document.documentElement.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>

      <div ref={mainRef} className='text-white' id='top'>
        <Navbar />
        <Container>

        </Container>
      </div>
    </>
  );
};

export default Home;
