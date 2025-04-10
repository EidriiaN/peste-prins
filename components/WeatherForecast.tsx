interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
}

interface WeatherForecastProps {
  forecast: ForecastData;
  days: number;
}

export default function WeatherForecast({ forecast, days }: WeatherForecastProps) {
  if (!forecast || !forecast.list || !Array.isArray(forecast.list)) {
    return null;
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat("ro-RO", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  // Process forecast data to get daily forecasts
  const getDailyForecasts = () => {
    const dailyForecasts = new Map();

    forecast.list.forEach((item) => {
      if (!item || !item.weather || !item.weather[0]) return;

      const date = new Date(item.dt * 1000).setHours(0, 0, 0, 0);

      if (!dailyForecasts.has(date)) {
        dailyForecasts.set(date, item);
      }
    });

    return Array.from(dailyForecasts.values()).slice(0, days);
  };

  const dailyForecasts = getDailyForecasts();

  if (dailyForecasts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
      {dailyForecasts.map((day) => (
        <div key={day.dt} className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="font-semibold text-[#2c3e50] mb-2">{formatDate(day.dt)}</div>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
            className="w-16 h-16 mx-auto"
          />
          <div className="text-xl font-bold text-[#2c3e50] my-2">{Math.round(day.main.temp)}°C</div>
          <div className="text-sm text-gray-600 capitalize">{day.weather[0].description}</div>
          <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div>
              <div className="text-gray-600">Umiditate</div>
              <div className="font-semibold">{day.main.humidity}%</div>
            </div>
            <div>
              <div className="text-gray-600">Vânt</div>
              <div className="font-semibold">{Math.round(day.wind.speed * 3.6)} km/h</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
