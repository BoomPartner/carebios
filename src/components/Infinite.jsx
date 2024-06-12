import React, { useEffect, useRef } from 'react';
import '../assets/InfiniteScroller.css'; // Asegúrate de importar el CSS

function InfiniteScroller() {
  const scrollersRef = useRef(null);

  useEffect(() => {
    const scrollers = scrollersRef.current.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div ref={scrollersRef} className='w-full container mx-auto'>
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          <img src="/clientes/c1.png" alt="" width={"200px"} height={"150px"} />
          <img src="/logos/logo.png" alt="logo-thermology" className='mt-4' width={200} height={100} />
          <img src="/clientes/c2.png" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/c3.png" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/c4.jpeg" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/c5.png" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/c6.png" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/c7.png" alt="" width={"200px"} height={"150px"} />
          <img src="/clientes/sotio.svg" alt="" width={"200px"} height={"150px"} />
         
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroller;