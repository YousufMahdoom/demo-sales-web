'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';

interface LazySectionProps {
  children: ReactNode;
  enabled?: boolean;
  minHeight?: string | number;
  rootMargin?: string;
  className?: string;
}

export default function LazySection({
  children,
  enabled = true,
  minHeight = '300px',
  rootMargin = '400px',
  className = '',
}: LazySectionProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    // If IntersectionObserver is not available, render immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [enabled, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={!inView ? { minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight } : undefined}
    >
      {inView ? children : null}
    </div>
  );
}
