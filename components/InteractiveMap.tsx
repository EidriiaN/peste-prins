"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] rounded-lg flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading map...</div>
    </div>
  ),
});

export default function InteractiveMap() {
  return <Map />;
}
