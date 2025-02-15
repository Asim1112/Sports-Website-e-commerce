"use client";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function TopSelling() {

    const scrollRef = useRef<HTMLDivElement | null>(null);
    const products = [
      {
          "id": 1,
          "name": "Running Shoes",
          "price": 59.99,
          "slug": "running-shoes",
          "category": "shoes",
          "img": "/assets/Shoes/shoes.jpg",
          "description": "Lightweight running shoes designed for comfort and long-distance running."
        },
        {
          "id": 2,
          "name": "Basketball Shoes",
          "price": 89.99,
          "slug": "basketball-shoes",
          "category": "shoes",
          "img": "/assets/Shoes/shoes2.jpg",
          "description": "Durable basketball shoes providing excellent grip and ankle support."
        },
        {
          "id": 3,
          "name": "Running Shoes",
          "price": 59.99,
          "slug": "running-shoes1",
          "category": "shoes",
          "img": "/assets/Shoes/shoes3.jpg",
          "description": "Performance running shoes with breathable mesh upper and cushioned sole."
        },
        {
          "id": 13,
          "name": "Trail Runner Outfit",
          "price": 59.99,
          "slug": "trail-runner-outfit",
          "category": "men",
          "img": "/assets/Mens/men.jpg",
          "description": "Perfect for running enthusiasts, this outfit offers lightweight shorts, a breathable T-shirt, and moisture-wicking socks for ultimate comfort."
        },
        {
          "id": 14,
          "name": "Pro Basketball Kit",
          "price": 89.99,
          "slug": "pro-basketball-kit",
          "category": "men",
          "img": "/assets/Mens/men2.jpg",
          "description": "A complete basketball set featuring a performance jersey, breathable shorts, and cushioned socks to enhance your game on the court."
        },
        {
          "id": 15,
          "name": "City Runner Set",
          "price": 59.99,
          "slug": "city-runner-set",
          "category": "men",
          "img": "/assets/Mens/men3.jpg",
          "description": "Designed for urban runners, this set includes a sweat-resistant T-shirt and running tights, helping you stay fresh during morning jogs."
        },
        {
          "id": 25,
          "name": "Ultimate Running Gear",
          "price": 59.99,
          "slug": "ultimate-running-gear",
          "category": "Equipment",
          "img": "/assets/Equipment/eq.jpg",
          "description": "Get the most out of your runs with our ultimate running gear, featuring a high-performance GPS watch, hydration belt, and reflective accessories for safety."
        },
        {
          "id": 26,
          "name": "Pro Basketball Gear",
          "price": 89.99,
          "slug": "pro-basketball-gear",
          "category": "Equipment",
          "img": "/assets/Equipment/eq2.jpg",
          "description": "Elevate your game with professional basketball gear, including a premium ball, adjustable hoop, and practice cones for skill development."
        },
        {
          "id": 27,
          "name": "Lightweight Running Essentials",
          "price": 59.99,
          "slug": "lightweight-running-essentials",
          "category": "Equipment",
          "img": "/assets/Equipment/eq3.jpg",
          "description": "These lightweight essentials include a running belt, moisture-wicking headband, and grip socks to enhance your running experience."
        },
        {
          "id": 37,
          "name": "Essential Running Accessories",
          "price": 59.99,
          "slug": "essential-running-accessories",
          "category": "Accessories",
          "img": "/assets/Accessories/acc.jpg",
          "description": "Upgrade your run with essential accessories, including a lightweight running belt, moisture-wicking headband, and reflective arm bands for safety."
        },
        {
          "id": 38,
          "name": "Pro Basketball Accessories",
          "price": 89.99,
          "slug": "pro-basketball-accessories",
          "category": "Accessories",
          "img": "/assets/Accessories/acc2.jpg",
          "description": "Dominate the court with pro basketball accessories, featuring a durable backpack, sweat-wicking wristbands, and a versatile ball pump."
        },
        {
          "id": 39,
          "name": "Premium Running Gear",
          "price": 59.99,
          "slug": "premium-running-gear",
          "category": "Accessories",
          "img": "/assets/Accessories/acc3.jpg",
          "description": "Ensure comfort and performance with premium running gear, including cushioned insoles, anti-chafing cream, and a reflective vest."
        },
        {
          "id": 49,
          "name": "Women's Running Essentials",
          "price": 59.99,
          "slug": "womens-running-essentials",
          "category": "Women",
          "img": "/assets/Women/women.jpg",
          "description": "Stay comfortable and stylish during your runs with these essentials, featuring breathable tank tops, high-performance leggings, and lightweight running shoes."
        },
        {
          "id": 50,
          "name": "Women's Basketball Performance Set",
          "price": 89.99,
          "slug": "womens-basketball-performance-set",
          "category": "Women",
          "img": "/assets/Women/women2.jpg",
          "description": "Elevate your game with this performance set, which includes moisture-wicking jerseys, supportive sports bras, and durable shorts designed for agility."
        },
        {
          "id": 51,
          "name": "Women's Running Gear",
          "price": 59.99,
          "slug": "womens-running-gear",
          "category": "Women",
          "img": "/assets/Women/women3.jpg",
          "description": "Designed for optimal comfort, this running gear features padded running shoes, adjustable headbands, and lightweight windbreakers for unpredictable weather."
        }
  ]
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let maxScroll = 0;
  
    const updateMaxScroll = () => {
      if (scrollContainer) {
        maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      }
    };
  
    const scrollProducts = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Adjust the increment for speed control
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0; // Reset to loop back
        }
      }
    };
  
    const scrollInterval = setInterval(scrollProducts, 40); // Adjusted interval for smooth scrolling
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
  
    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);



  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold title-font text-center mb-10 tracking-wider wordTheme">
        TOP SELLING PRODUCTS
      </h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4"
        style={{
          scrollBehavior: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          whiteSpace: "nowrap",
        }}
      >
        <style jsx>{`
          /* Hide scrollbar for Chrome, Safari, and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-72 p-4 rounded-lg shadow-lg bg-white"
          >
            <Link href={`/${product.slug}`} className="block relative h-64">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 text-lg font-medium">
                {product.name}
              </h2>
              <p className="mt-1">Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
