// Types:
interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface CurrentWeatherData_Type {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lat: number; lon: number };
  dt: number;
  id: number;
  main: Main;
  name: string;
  rain?: { '1h': number };
  sys: Sys;
  timezone: number;
  visibility: number;
  weather?: Weather[];
  wind: { deg: number; speed: number };
}

export interface CurrentWeatherState_Type {
  cityName: string;
  weatherData: CurrentWeatherData_Type | null;
  isLoadingViaAPI: boolean;
  errorMsg: string;
  weatherQueryCounter: number;
}

export interface CurrentWeatherSlice_Type {
  currentWeather: {
    cityName: string;
    weatherData: CurrentWeatherData_Type | null;
    isLoadingViaAPI: boolean;
    errorMsg: string;
    weatherQueryCounter: number;
  };
}
