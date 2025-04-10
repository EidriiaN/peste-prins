interface WeatherCardProps {
  weather: {
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
  };
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-[#2c3e50] capitalize mt-2">{weather.weather[0].description}</h3>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-[#2c3e50]">{Math.round(weather.main.temp)}°C</div>
            <div className="text-gray-600 mt-1">Se simte ca {Math.round(weather.main.feels_like)}°C</div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <div className="text-gray-600">Umiditate</div>
              <div className="text-lg font-semibold text-[#2c3e50]">{weather.main.humidity}%</div>
            </div>
            <div>
              <div className="text-gray-600">Vânt</div>
              <div className="text-lg font-semibold text-[#2c3e50]">{Math.round(weather.wind.speed * 3.6)} km/h</div>
            </div>
            <div>
              <div className="text-gray-600">Presiune</div>
              <div className="text-lg font-semibold text-[#2c3e50]">{weather.main.pressure} hPa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
