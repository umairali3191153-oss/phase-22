
import React, { useEffect, useRef, useState } from 'react';
import { VantaEffect } from '../types';

interface VantaBackgroundProps {
  effect: VantaEffect;
  isActive: boolean;
  scrollProgress: number; 
  isDarkMode: boolean;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ effect, isActive, isDarkMode }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectInstance = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (effect === VantaEffect.NONE) {
      setIsReady(false);
      if (effectInstance.current) {
        effectInstance.current.destroy();
        effectInstance.current = null;
      }
      return;
    }

    if (!vantaRef.current) return;

    const initVanta = () => {
      if (effectInstance.current) {
        effectInstance.current.destroy();
        effectInstance.current = null;
      }

      if (!window.VANTA || !window.VANTA[effect]) return;

      const bgColor = isDarkMode ? 0x020617 : 0xffffff; 
      const primaryColor = 0x25d366;

      const commonConfig = {
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
              ...commonConfig,
              skyColor: isDarkMode ? 0x020617 : 0x2196f3,
              cloudColor: isDarkMode ? 0x1e293b : 0xe8f5e9, 
              speed: 1.5,
            });
            break;
          case VantaEffect.DOTS:
            effectInstance.current = window.VANTA.DOTS({
              ...commonConfig,
              color: primaryColor,
              color2: isDarkMode ? 0x1e293b : 0x000000,
              size: 2.5,
              spacing: 35.0,
            });
            break;
          case VantaEffect.NET:
            effectInstance.current = window.VANTA.NET({
              ...commonConfig,
              color: primaryColor,
              backgroundColor: isDarkMode ? bgColor : 0xf1f5f9,
              points: 18.0,
              maxDistance: 22.0,
              spacing: 16.0,
            });
            break;
          case VantaEffect.TOPOLOGY:
            effectInstance.current = window.VANTA.TOPOLOGY({
              ...commonConfig,
              color: isDarkMode ? 0x166534 : 0x25d366,
              backgroundColor: bgColor
            });
            break;
          case VantaEffect.WAVES:
            effectInstance.current = window.VANTA.WAVES({
              ...commonConfig,
              color: isDarkMode ? 0x064e3b : 0x25d366,
              shininess: isDarkMode ? 20.0 : 40.0,
              waveHeight: 15.0,
              waveSpeed: 1.0,
            });
            break;
          case VantaEffect.RINGS:
            effectInstance.current = window.VANTA.RINGS({
              ...commonConfig,
              color: primaryColor,
              backgroundColor: isDarkMode ? bgColor : 0xffffff,
            });
            break;
          case VantaEffect.FOG:
            effectInstance.current = window.VANTA.FOG({
              ...commonConfig,
              highlightColor: isDarkMode ? 0x14532d : 0x25d366,
              midtoneColor: isDarkMode ? 0x064e3b : 0x86efac,
              lowlightColor: isDarkMode ? 0x020617 : 0xffffff,
              baseColor: bgColor,
              speed: 3.0,
            });
            break;
        }
        setIsReady(true);
      } catch (err) {
        console.warn(`Vanta [${effect}] init failed:`, err);
      }
    };

    initVanta();

    return () => {
      if (effectInstance.current) {
        effectInstance.current.destroy();
        effectInstance.current = null;
      }
    };
  }, [effect, isDarkMode]);

  return (
    <div 
      ref={vantaRef} 
      className={`vanta-container fixed inset-0 transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default VantaBackground;
