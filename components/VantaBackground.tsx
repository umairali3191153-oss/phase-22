'use client';

import React, { useEffect, useRef, useState, memo } from 'react';
import { VantaEffect } from '../types/index';

interface VantaBackgroundProps {
  effect: VantaEffect;
  isDarkMode: boolean;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground: React.FC<VantaBackgroundProps> = memo(({ effect, isDarkMode }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectInstance = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const lastEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const cleanup = () => {
      if (effectInstance.current) {
        try {
          // Some Vanta effects have specific cleanup needs
          effectInstance.current.destroy();
        } catch (e) {
          console.warn('Vanta cleanup warning:', e);
        }
        effectInstance.current = null;
      }
    };

    const initVanta = () => {
      if (typeof window === 'undefined' || !vantaRef.current) return false;

      // Ensure core dependencies are ready
      if (!window.VANTA || !window.THREE) {
        return false;
      }

      // If "NONE", just clean up and exit
      if (effect === VantaEffect.NONE) {
        cleanup();
        setIsReady(true);
        return true;
      }

      // Ensure the specific effect script is loaded
      if (!window.VANTA[effect]) {
        return false;
      }

      // Prevent redundant re-init if nothing changed
      if (lastEffect.current === effect && effectInstance.current) {
        return true;
      }

      cleanup();

      const bgColor = isDarkMode ? 0x020617 : 0xffffff;
      const primaryColor = 0x25d366;

      const baseConfig = {
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        THREE: window.THREE,
        backgroundColor: bgColor,
      };

      try {
        switch (effect) {
          case VantaEffect.CLOUDS:
            effectInstance.current = window.VANTA.CLOUDS({
              ...baseConfig,
              skyColor: isDarkMode ? 0x020617 : 0x2196f3,
              cloudColor: isDarkMode ? 0x1e293b : 0xadc1ea,
              speed: 1.2,
            });
            break;
          case VantaEffect.DOTS:
            effectInstance.current = window.VANTA.DOTS({
              ...baseConfig,
              color: primaryColor,
              color2: isDarkMode ? 0x1e293b : 0x000000,
              size: 2.5,
              spacing: 35.0,
            });
            break;
          case VantaEffect.NET:
            effectInstance.current = window.VANTA.NET({
              ...baseConfig,
              color: primaryColor,
              backgroundColor: isDarkMode ? bgColor : 0xf1f5f9,
              points: 15.0,
              maxDistance: 20.0,
              spacing: 15.0,
            });
            break;
          case VantaEffect.TOPOLOGY:
            effectInstance.current = window.VANTA.TOPOLOGY({
              ...baseConfig,
              color: isDarkMode ? 0x166534 : 0x25d366,
            });
            break;
          case VantaEffect.WAVES:
            effectInstance.current = window.VANTA.WAVES({
              ...baseConfig,
              color: isDarkMode ? 0x064e3b : 0x25d366,
              shininess: isDarkMode ? 20.0 : 40.0,
              waveHeight: 12.0,
              waveSpeed: 0.8,
            });
            break;
          case VantaEffect.FOG:
            effectInstance.current = window.VANTA.FOG({
              ...baseConfig,
              highlightColor: isDarkMode ? 0x14532d : 0x25d366,
              midtoneColor: isDarkMode ? 0x064e3b : 0x86efac,
              lowlightColor: isDarkMode ? 0x020617 : 0xffffff,
              baseColor: bgColor,
              speed: 2.5,
            });
            break;
          default:
            // Fallback for missing effects
            setIsReady(true);
            return true;
        }

        lastEffect.current = effect;
        setIsReady(true);
        return true;
      } catch (err) {
        console.error(`Vanta [${effect}] Init Error:`, err);
        return false;
      }
    };

    // Retry loop with backoff to wait for scripts
    const attemptInit = () => {
      const success = initVanta();
      if (!success) {
        timer = setTimeout(attemptInit, 250);
      }
    };

    attemptInit();

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [effect, isDarkMode]);

  return (
    <div 
      ref={vantaRef} 
      className={`vanta-container fixed inset-0 transition-opacity duration-1000 ease-in-out ${isReady ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        zIndex: -1,
        pointerEvents: 'none',
        background: isDarkMode ? '#020617' : '#ffffff'
      }}
    />
  );
});

VantaBackground.displayName = 'VantaBackground';

export default VantaBackground;