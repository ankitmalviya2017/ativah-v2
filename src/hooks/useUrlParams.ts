'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

/**
 * A custom hook to manage URL search parameters in a Next.js App Router environment.
 * Provides methods to get, set, delete, and clear parameters.
 */
export const useUrlParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  /**
   * Get a parameter value by name.
   */
  const getParam = useCallback(
    (name: string) => {
      return searchParams.get(name);
    },
    [searchParams]
  );

  /**
   * Set or update a single parameter.
   * If value is null or empty, the parameter is deleted.
   */
  const setParam = useCallback(
    (name: string, value: string | null, path?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      router.push(`${path || pathname}?${params.toString()}`);
    },
    [router, searchParams, pathname]
  );

  /**
   * Set multiple parameters at once.
   * Passing null for a value will delete that parameter.
   */
  const setParams = useCallback(
    (newParams: Record<string, string | null>, path?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newParams).forEach(([name, value]) => {
        if (value) {
          params.set(name, value);
        } else {
          params.delete(name);
        }
      });
      router.push(`${path || pathname}?${params.toString()}`);
    },
    [router, searchParams, pathname]
  );

  /**
   * Delete a single parameter.
   */
  const deleteParam = useCallback(
    (name: string, path?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      router.push(`${path || pathname}?${params.toString()}`);
    },
    [router, searchParams, pathname]
  );

  /**
   * Clear all search parameters.
   */
  const clearParams = useCallback(
    (path?: string) => {
      router.push(path || pathname);
    },
    [router, pathname]
  );

  return {
    getParam,
    setParam,
    setParams,
    deleteParam,
    clearParams,
    searchParams,
  };
};
