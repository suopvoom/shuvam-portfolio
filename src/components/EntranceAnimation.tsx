import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

export interface EntranceAnimationProps {
  onExitStart?: () => void;
  onComplete: () => void;
}

export const EntranceAnimation: React.FC<EntranceAnimationProps> = ({
  onExitStart,
  onComplete,
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const onExitStartRef = useRef(onExitStart);
  const onCompleteRef = useRef(onComplete);
  onExitStartRef.current = onExitStart;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // 1. At 1350ms, begin smooth fade-out and notify Hero to start its staggered entrance
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      onExitStartRef.current?.();
    }, 1350);

    // 2. At 1800ms (~1.8s total), completely unmount the overlay
    const completeTimer = setTimeout(() => {
      onCompleteRef.current?.();
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const firstName = "SHUVAM";
  const lastName = "CHOWDHURY";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.08,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      id="entrance-overlay"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0c0f17] select-none ${
        isExiting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      {/* Subtle ambient gold radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center px-6">
        {/* Typographic Staggered Letter Reveal */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-3 text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* SHUVAM */}
          <span className="inline-flex text-white">
            {firstName.split('').map((char, index) => (
              <motion.span key={`first-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </span>

          {/* CHOWDHURY */}
          <span className="inline-flex text-amber-400 font-extrabold">
            {lastName.split('').map((char, index) => (
              <motion.span key={`last-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </span>

          {/* Accent Dot */}
          <motion.span
            variants={letterVariants}
            className="text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
          >
            .
          </motion.span>
        </motion.div>

        {/* Subtitle Reveal */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs sm:text-sm text-amber-400/90 tracking-[0.25em] uppercase mt-4"
        >
          Software Developer &bull; BCA @ IEM
        </motion.p>

        {/* Minimal Animated Accent Line */}
        <div className="w-32 sm:w-44 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};
