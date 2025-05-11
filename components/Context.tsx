"use client";

import React, { createContext, useContext, useState } from 'react';

type LoadingContextType = {
  totalBorders: number;
  loadedBorders: number;
  incrementLoaded: () => void;
  setTotal: (total: number) => void;
  isFullyLoaded: boolean;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [totalBorders, setTotalBorders] = useState(0);
  const [loadedBorders, setLoadedBorders] = useState(0);

  const incrementLoaded = () => {
    setLoadedBorders(prev => prev + 1);
  };

  const setTotal = (total: number) => {
    setTotalBorders(total);
  };

  return (
    <LoadingContext.Provider 
      value={{
        totalBorders,
        loadedBorders,
        incrementLoaded,
        setTotal,
        isFullyLoaded: loadedBorders >= totalBorders && totalBorders > 0
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error('useLoading must be used within LoadingProvider');
  return context;
};