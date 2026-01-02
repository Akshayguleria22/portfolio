"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function StarryBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <>
      {/* Main Starry Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: {
                enable: true,
              } as any,
            },
            modes: {
              grab: {
                distance: 100,
                links: {
                  opacity: 0.2,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.7 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -2,
          top: 0,
          left: 0,
        }}
      />
      
      {/* Shooting Stars */}
      <Particles
        id="shooting-stars"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#ffffff", "#13ADC7", "#60A5FA", "#93C5FD"],
            },
            move: {
              enable: true,
              speed: 10,
              direction: "bottom-right",
              straight: true,
              outModes: {
                default: "destroy",
              },
            },
            number: {
              value: 2,
              max: 5,
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 3,
                sync: false,
                startValue: "max",
                destroy: "min",
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
            zIndex: {
              value: 0,
            },
            shadow: {
              blur: 15,
              color: {
                value: "#ffffff",
              },
              enable: true,
            },
          },
          emitters: [
            {
              direction: "bottom-right",
              rate: {
                quantity: 1,
                delay: 0.5,
              },
              size: {
                width: 0,
                height: 0,
              },
              position: {
                x: 10,
                y: 10,
              },
              life: {
                count: 0,
                duration: 0.1,
              },
            },
          ],
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
