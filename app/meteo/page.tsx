"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WeatherCard from "@/components/WeatherCard";
import WeatherForecast from "@/components/WeatherForecast";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}

interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
  city: {
    name: string;
  };
}

export default function MeteoPage() {
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [forecastDays, setForecastDays] = useState(5);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });

          // First, get the location name using reverse geocoding
          try {
            const reverseGeoResponse = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
            );

            if (reverseGeoResponse.ok) {
              const geoData = await reverseGeoResponse.json();
              if (geoData.length > 0) {
                // Use the most specific location name available
                const location = geoData[0];
                const cityName = location.local_names?.ro || location.name;
                console.log("Reverse geocoded location:", location);

                // Now fetch weather with the accurate coordinates
                await fetchWeatherByCoords(latitude, longitude, cityName);
                await fetchForecastByCoords(latitude, longitude);
              }
            }
          } catch (error) {
            console.error("Error in reverse geocoding:", error);
            // Fallback to direct coordinate weather fetch
            await fetchWeatherByCoords(latitude, longitude);
            await fetchForecastByCoords(latitude, longitude);
          }
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
          setError("Nu s-a putut determina locația. Vă rugăm să folosiți bara de căutare.");
        }
      );
    } else {
      setLoading(false);
      setError("Geolocația nu este suportată de browser-ul dumneavoastră");
    }
  }, []);

  const fetchWeatherByCoords = async (lat: number, lon: number, overrideName?: string) => {
    try {
      console.log("Fetching weather for coordinates:", { lat, lon });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ro&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Weather API responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Weather data received:", data);

      // Use the override name if provided, otherwise use the API response name
      setCurrentWeather(data);
      setLocation(overrideName || data.name);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Nu s-au putut prelua datele meteo. Verificați consola pentru detalii.");
    }
  };

  const fetchForecastByCoords = async (lat: number, lon: number) => {
    try {
      console.log("Fetching forecast for coordinates:", { lat, lon });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ro&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Forecast API responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Forecast data received:", data);

      setForecast(data);
    } catch (error) {
      console.error("Error fetching forecast:", error);
      setError("Could not fetch forecast data. Please check the console for details.");
    }
  };

  const handleSearch = async () => {
    if (!searchLocation) return;

    try {
      console.log("Searching for location:", searchLocation);

      const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation},RO&limit=10&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );

      if (!geoResponse.ok) {
        throw new Error(`Geocoding API responded with status: ${geoResponse.status}`);
      }

      const geoData = await geoResponse.json();
      console.log("Geocoding data received:", geoData);

      if (geoData.length > 0) {
        // Filter for Romanian locations and sort by relevance
        const romanianLocations = geoData.filter((loc: any) => loc.country === "RO");

        // Find exact matches in Romanian and English names
        const exactMatch = romanianLocations.find((location: any) => {
          const searchLower = searchLocation.toLowerCase();
          const nameMatch = location.name.toLowerCase() === searchLower;
          const localNameMatch = location.local_names?.ro?.toLowerCase() === searchLower;
          return nameMatch || localNameMatch;
        });

        // Find matches for major cities (using state data)
        const majorCityMatch = romanianLocations.find((location: any) => {
          return (
            location.state &&
            (location.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
              (location.local_names?.ro || "").toLowerCase().includes(searchLocation.toLowerCase()))
          );
        });

        // Use the best match available
        const locationToUse = exactMatch || majorCityMatch || romanianLocations[0];

        if (locationToUse) {
          const { lat, lon } = locationToUse;
          const displayName = locationToUse.local_names?.ro || locationToUse.name;

          console.log("Selected location:", locationToUse);
          await fetchWeatherByCoords(lat, lon, displayName);
          await fetchForecastByCoords(lat, lon);
          setError("");
        } else {
          setError("Nu s-a găsit locația în România. Încercați să specificați și județul.");
        }
      } else {
        setError("Locația nu a fost găsită. Încercați să specificați și județul.");
      }
    } catch (error) {
      console.error("Error searching location:", error);
      setError("Eroare la căutarea locației. Verificați consola pentru detalii.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">Prognoza Meteo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Verifică vremea pentru locația ta sau caută alte locații</p>
        </div>

        {/* Search Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Caută o locație..."
              value={searchLocation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchLocation(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch} className="bg-[#4a7c59] hover:bg-[#3a6c49] text-white">
              Caută
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant={forecastDays === 1 ? "default" : "outline"}
              onClick={() => setForecastDays(1)}
              className={forecastDays === 1 ? "bg-[#4a7c59] hover:bg-[#3a6c49] text-white" : ""}
            >
              1 Zi
            </Button>
            <Button
              variant={forecastDays === 5 ? "default" : "outline"}
              onClick={() => setForecastDays(5)}
              className={forecastDays === 5 ? "bg-[#4a7c59] hover:bg-[#3a6c49] text-white" : ""}
            >
              5 Zile
            </Button>
            <Button
              variant={forecastDays === 10 ? "default" : "outline"}
              onClick={() => setForecastDays(10)}
              className={forecastDays === 10 ? "bg-[#4a7c59] hover:bg-[#3a6c49] text-white" : ""}
            >
              10 Zile
            </Button>
          </div>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">{error}</div>}

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a7c59] mx-auto"></div>
            <p className="mt-4 text-gray-600">Se încarcă datele meteo...</p>
          </div>
        ) : (
          <>
            {/* Current Weather */}
            {currentWeather && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Vremea curentă în {location}</h2>
                <WeatherCard weather={currentWeather} />
              </div>
            )}

            {/* Weather Forecast */}
            {forecast && (
              <div>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">
                  Prognoza pentru următoarele {forecastDays} {forecastDays === 1 ? "zi" : "zile"}
                </h2>
                <WeatherForecast forecast={forecast} days={forecastDays} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
