// App.js

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './Apps.css'; // Importing the CSS file

const Apps = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <header>
        <h1>Smooth Scrolling with Lenis</h1>
        <nav>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      </header>
      <main>
        <section id="section1">
          <h2>Section 1</h2>
          <p>Welcome to section 1. Scroll down for more.</p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>Here is section 2. Keep scrolling!</p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>You've reached section 3. Enjoy the smooth scroll!</p>
        </section>
      </main>
      <footer>
        <p>Footer Section. This concludes the smooth scroll demo.</p>
      </footer>
    </div>
  );
};

export default Apps;
