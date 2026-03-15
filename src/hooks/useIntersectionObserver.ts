"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onIntersect: () => void;
  enabled?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  onIntersect,
  enabled = true,
}: UseIntersectionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const targetRef = useCallback(
    (node: HTMLElement | null) => {
      if (!enabled) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onIntersect();
          }
        },
        { threshold, root, rootMargin }
      );

      if (node) observer.current.observe(node);
    },
    [threshold, root, rootMargin, onIntersect, enabled]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return { targetRef };
};
