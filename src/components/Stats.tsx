"use client";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';


export default function Stats() {

    const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false, // Keep triggering on each scroll
    onChange: (inView) => {
      if (inView) {
        setStartCount(true);  // Start counting when in view
      } else {
        setStartCount(false); // Reset counting when out of view
      }
    }
  });
  
  
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div ref={ref} className={`flex flex-wrap -m-4 text-center ${inView ? 'animate-stats' : ''}`}>
        {/* Statistic Item 1 (Products) */}
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M20.64 10.12l-.22-1.22a2 2 0 00-1.98-1.67H6.56l-.8-4.01A2 2 0 003.77 2H2"></path>
              <path d="M8 12h8l4 9H6l2-9z"></path>
              <path d="M8 20h8"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl ">
              {startCount && <CountUp end={2700} duration={2} />}
            </h2>
            <p className="leading-relaxed secondLetter">Products</p> {/* Changed from "Downloads" to "Products" */}
          </div>
        </div>
        {/* Statistic Item 2 */}
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {startCount && <CountUp end={1300} duration={2} />}
            </h2>
            <p className="leading-relaxed secondLetter">Users</p>
          </div>
        </div>
        {/* Statistic Item 3 */}
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {startCount && <CountUp end={74} duration={2} />}
            </h2>
            <p className="leading-relaxed secondLetter">Files</p>
          </div>
        </div>
        {/* Statistic Item 4 */}
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {startCount && <CountUp end={46} duration={2} />}
            </h2>
            <p className="leading-relaxed secondLetter">Places</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
