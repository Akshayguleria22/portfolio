"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Interactive3DPhoto() {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const interval = setInterval(() => {
      setTime(prev => prev + 0.016); // ~60fps
    }, 16);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  // Hide 3D photos on mobile for performance
  if (isMobile) return null;

  // First card calculations - EXACT 3D position mapping
  const progress1 = Math.min(scrollY / 1500, 1);
  
  // Rotate from start to see the flip
  const rotateY1 = progress1 * 180;
  const rotateZ1 = Math.sin(time * 0.3) * 6;
  const rotateX1 = Math.sin(time * 0.2) * 3;
  const floatY1 = Math.sin(time * 0.5) * 30;
  
  // Adjusted position: bring closer to center, more visible
  const posX3D_1 = 2.5 - progress1 * 8 + Math.sin(progress1 * Math.PI) * 2;
  const posY3D_1 = progress1 * 1.5; // Move DOWN as we scroll (positive)
  
  // Convert 3D to screen
  const posX1 = 50 + (posX3D_1 * 6); // Reduced multiplier to keep more centered
  const posY1 = 300 + (posY3D_1 * 150) + floatY1; // Start at 300px, move down
  const scale1 = 1 + progress1 * 0.3;
  const opacity1 = 0.7 - progress1 * 0.3;

  // Second card calculations - EXACT 3D position mapping
  const startScroll = 2000;
  const progress2 = Math.min(Math.max(scrollY - startScroll, 0) / 1500, 1);
  
  // Rotate from start to see the flip
  const rotateY2 = -progress2 * 180;
  const rotateZ2 = Math.sin(time * 0.3) * 6;
  const rotateX2 = Math.sin(time * 0.2) * 3;
  const floatY2 = Math.sin(time * 0.5) * 30;
  
  // Adjusted position: bring closer to center
  const posX3D_2 = -2.5 + progress2 * 8 - Math.sin(progress2 * Math.PI) * 2;
  const posY3D_2 = progress2 * 1.5; // Move DOWN as we scroll (positive)
  
  // Convert 3D to screen
  const posX2 = 50 + (posX3D_2 * 6); // Reduced multiplier to keep more centered
  const posY2 = 300 + (posY3D_2 * 150) + floatY2; // Start at 300px, move down
  const scale2 = 1 + progress2 * 0.3;
  const opacity2 = 0.7 - progress2 * 0.3;
  const visible2 = scrollY > startScroll;

  return (
    <>
      {/* First Photo Card */}
      <div
        className="fixed pointer-events-none z-5"
        style={{
          left: `${posX1}%`,
          top: `${posY1}px`,
          transform: `scale(${scale1}) translate(-50%, -50%)`,
          opacity: opacity1,
        }}
      >
        <div
          className="relative w-72 h-96 rounded-3xl overflow-hidden"
          style={{
            transform: `rotateY(${rotateY1}deg) rotateZ(${rotateZ1}deg) rotateX(${rotateX1}deg)`,
            transformStyle: "preserve-3d",
            border: "2px solid rgba(0, 255, 255, 0.4)",
            boxShadow: "0 0 20px rgba(74, 158, 255, 0.3)",
            willChange: "transform",
          }}
        >
          {/* Front Image - Professional */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/akshay-professional.jpeg"
              alt="Akshay Guleria Professional"
              fill
              sizes="288px"
              className="object-cover"
              priority={false}
              quality={75}
            />
          </div>

          {/* Back Image - Casual */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src="/akshay-casual.jpg"
              alt="Akshay Guleria"
              fill
              sizes="288px"
              className="object-cover"
              quality={75}
            />
          </div>
        </div>
      </div>

      {/* Second Photo Card */}
      {visible2 && (
        <div
          className="fixed pointer-events-none z-5"
          style={{
            left: `${posX2}%`,
            top: `${posY2}px`,
            transform: `scale(${scale2}) translate(-50%, -50%)`,
            opacity: opacity2,
          }}
        >
          <div
            className="relative w-72 h-96 rounded-3xl overflow-hidden"
            style={{
              transform: `rotateY(${rotateY2}deg) rotateZ(${rotateZ2}deg) rotateX(${rotateX2}deg)`,
              transformStyle: "preserve-3d",
              border: "2px solid rgba(0, 255, 255, 0.4)",
              boxShadow: "0 0 20px rgba(74, 158, 255, 0.3)",
              willChange: "transform",
            }}
          >
            {/* Front & Back - Same Image */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <Image
                src="/akshay-workspace.jpeg"
                alt="Workspace"
                fill
                sizes="288px"
                className="object-cover"
                quality={75}
              />
            </div>

            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src="/akshay-workspace.jpeg"
                alt="Workspace"
                fill
                sizes="288px"
                className="object-cover"
                quality={75}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
