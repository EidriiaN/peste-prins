"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const [userMarker, setUserMarker] = useState<L.Marker | null>(null);
  const mapInitialized = useRef(false);

  // Function to initialize map with location
  const initializeMap = (latitude: number, longitude: number, zoom: number) => {
    if (!mapRef.current || mapInitialized.current) return;

    const mapInstance = L.map(mapRef.current).setView([latitude, longitude], zoom);
    setMap(mapInstance);
    mapInitialized.current = true;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapInstance);

    // Add water layer
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapInstance);

    return mapInstance;
  };

  // Function to handle getting user's location
  const handleGetLocation = (mapInstance?: L.Map) => {
    const currentMap = mapInstance || map;
    if (!currentMap) return;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Create or update user location marker
          if (userMarker) {
            userMarker.setLatLng([latitude, longitude]);
          } else {
            const newMarker = L.marker([latitude, longitude], {
              title: "Your Location",
              icon: L.divIcon({
                className: "bg-blue-500 w-4 h-4 rounded-full border-2 border-white",
                iconSize: [16, 16],
                iconAnchor: [8, 8],
              }),
            }).addTo(currentMap);
            setUserMarker(newMarker);
          }

          // Center map on user location
          currentMap.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error("Error getting location:", error);
          // If we can't get location and map isn't initialized yet, center on Romania
          if (!mapInitialized.current) {
            initializeMap(45.9432, 24.9668, 7);
          }
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
      // If geolocation is not supported, center on Romania
      if (!mapInitialized.current) {
        initializeMap(45.9432, 24.9668, 7);
      }
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInitialized.current) return;

    // Try to get user location first
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Initialize map centered on user location
          const mapInstance = initializeMap(latitude, longitude, 13);
          if (mapInstance) {
            // Add user marker
            const newMarker = L.marker([latitude, longitude], {
              title: "Your Location",
              icon: L.divIcon({
                className: "bg-blue-500 w-4 h-4 rounded-full border-2 border-white",
                iconSize: [16, 16],
                iconAnchor: [8, 8],
              }),
            }).addTo(mapInstance);
            setUserMarker(newMarker);
          }
        },
        () => {
          // If we can't get location, center on Romania
          if (!mapInitialized.current) {
            initializeMap(45.9432, 24.9668, 7);
          }
        }
      );
    } else {
      // If geolocation is not supported, center on Romania
      if (!mapInitialized.current) {
        initializeMap(45.9432, 24.9668, 7);
      }
    }

    return () => {
      if (map) {
        map.remove();
        mapInitialized.current = false;
      }
    };
  }, [map]);

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-[600px] rounded-lg" />
      <button
        onClick={() => handleGetLocation()}
        className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors z-[1000]"
        title="Find my location"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
}
