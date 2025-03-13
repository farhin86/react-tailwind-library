import { memo } from "react";
import Card from "../Card";

export type WeatherInfoType = {
  coord?: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: { speed: number; deg: number };
  name: string;
};

function WeatherInfo({ weatherInfo }: { weatherInfo: WeatherInfoType }) {
  console.log("NAME", weatherInfo, weatherInfo.name);
  function getCapitalize(desc: string) {
    const caps = desc
      .split(" ")
      .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
    return caps;
  }
  return (
    <div className="text-white flex justify-center flex-col items-center mt-10 gap-1">
      <div className="text-3xl">{weatherInfo.name}</div>
      <div className="text-7xl font-thin">
        {weatherInfo.main.temp}
        {"\u00b0"}
      </div>
      <div>{weatherInfo.weather[0].main}</div>
      <div className="flex gap-4">
        <div>
          H:{weatherInfo.main.temp_max}
          {"\u00b0"}
        </div>
        <div>
          L:{weatherInfo.main.temp_min}
          {"\u00b0"}
        </div>
      </div>
      <div className="size-full flex flex-wrap gap-10 justify-center mt-5">
        <Card title={"Humidity"}>
          <div>{weatherInfo.main.humidity}%</div>
        </Card>
        <Card title={"Pressure"}>
          <div>{weatherInfo.main.pressure}</div>
        </Card>
        <Card title={"Wind"}>
          <div>{weatherInfo.wind.speed}</div>
        </Card>
        <Card title={"Feels like"}>
          <div>
            <div>
              {weatherInfo.main.feels_like}
              {"\u00b0"}
            </div>
            <div>{getCapitalize(weatherInfo.weather[0].description)}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default memo(WeatherInfo);
