'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SplashScreen() {
  
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname(); 
  
    useEffect(() => {
      if (pathname !== '/') {
        setIsVisible(false); 
        return;
      }
  
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [pathname]);
    
    
    
    return isVisible ? (
        <div className={`splashContainer ${!isVisible ? 'fadeOut' : ''}`}>
          <div className="splashContent">
            <h1 className='text-3xl md:text-4xl font-extrabold italic'>Sports Wear</h1>
          </div>
        </div>
      ) : null;
    };
