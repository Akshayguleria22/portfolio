"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide cursor on mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let animationFrameId: number;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        // Throttle using requestAnimationFrame
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
          cursorDot.style.left = `${e.clientX}px`;
          cursorDot.style.top = `${e.clientY}px`;
        });
      }
    };

    const expandCursor = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      }
    };

    const shrinkCursor = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .magnetic");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", expandCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", expandCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s ease",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: "4px",
          height: "4px",
          backgroundColor: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
