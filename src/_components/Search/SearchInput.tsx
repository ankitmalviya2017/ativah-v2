'use client';

import React, { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useDebounceValue } from 'usehooks-ts';
import { useUrlParams } from '@/hooks/useUrlParams';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  className?: string;
  onClose?: () => void;
}

export const SearchInput = ({ className, onClose }: SearchInputProps) => {
  const { getParam, setParam } = useUrlParams();
  const [searchTerm, setSearchTerm] = useState(getParam('search') || '');
  
  // useDebounceValue returns [debouncedValue, setDebouncedValue]
  // We use the 500ms delay as planned
  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 500);

  const handleSearch = (term: string) => {
    setParam('search', term, '/shop');
  };

  useEffect(() => {
    // Only update the URL if the debounced term has changed
    const currentSearch = getParam('search') || '';
    if (debouncedSearchTerm !== currentSearch) {
      handleSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, getParam]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
    <div className={cn("relative flex items-center w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-300", className)}>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-all"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              handleSearch('');
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
            title="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-3 p-2 text-gray-500 hover:text-black flex items-center gap-1 transition-all group"
        >
          <span className="text-xs font-bold uppercase tracking-widest hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
