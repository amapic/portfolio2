"use client";

import { useLoading } from './Context';

export default function LoadingScreen() {
  const { isFullyLoaded, loadedBorders, totalBorders } = useLoading();

  if (isFullyLoaded) return null;
 console.log(loadedBorders)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        <div>Loading... {loadedBorders}/{totalBorders}</div>
      </div>
    </div>
  );
}