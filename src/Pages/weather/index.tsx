import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { weatherData, cityOptions } from "../../constant";
import WeatherInfo, { WeatherInfoType } from "../../components/WeatherInfo";

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export const Weather = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingMsg, setLoadingMsg] = useState(
    "Please select city from the search above!"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherInfoType | null>(null);
  const [searchOptions, setSearchOptions] = useState(cityOptions);
  const API_KEY = "9db465dfd9e861671487db7fc265b469";

  function handleSearchCity(city: string) {
    setSelectedCity(city);
    fetchWeather(city);
  }

  function handleClearSearch() {
    setSelectedCity("");
    setSearchOptions(cityOptions);
  }

  function getOptions(query: string) {
    setSelectedCity(query);
    if (query === "") {
      setSearchOptions(cityOptions);
    } else {
      const options = cityOptions.filter((eachCity) =>
        eachCity.toLowerCase().startsWith(query.toLowerCase())
      );
      setSearchOptions(options || []);
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      setLoadingMsg("Fetching current Location!");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  function showPosition(position: Position) {
    const { latitude, longitude } = position.coords;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => handleSearchCity(data.name))
      .catch((error) => console.error("Error:", error.message));
  }
  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-400 size-full h-screen">
      <Header name={"Weather"}>
        <Input
          placeholder="Search city"
          onChange={(val) => getOptions(val)}
          classname="p-1 border-solid border-2 border-sky-500 rounded text-blue-600"
          value={selectedCity}
          showIcon={true}
          onClose={() => handleClearSearch()}
          options={searchOptions}
          onSelect={(val) => handleSearchCity(val)}
        />
      </Header>
      {!loading && !weatherData && (
        <div className="text-white flex justify-center items-center mt-10 text-2xl">
          {loadingMsg}
        </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-700">{error}</p>}
      <img
        className="absolute w-1/3 -top-3 z-0"
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
      />
      {weatherData && !loading && !error && (
        <WeatherInfo weatherInfo={weatherData} />
      )}
    </div>
  );
};
