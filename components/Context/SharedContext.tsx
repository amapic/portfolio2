import { createContext, useContext, useState, ReactNode } from 'react';

interface SharedContextType {
  sharedValue: any;
  setSharedValue: (value: any) => void;
}

const SharedContext = createContext<SharedContextType | undefined>(undefined);

export function SharedProvider({ children }: { children: ReactNode }) {
  const [sharedValue, setSharedValue] = useState({});

  return (
    <SharedContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </SharedContext.Provider>
  );
}

export function useShared() {
  const context = useContext(SharedContext);
  if (context === undefined) {
    throw new Error('useShared must be used within a SharedProvider');
  }
  return context;
}