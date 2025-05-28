export interface WeatherForecastDay_Type {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather?: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: { deg: number; gust: number; speed: number };
}

export interface City {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface GeneralWeatherForecast_Type {
  city: City;
  cnt: number;
  cod: string;
  list: WeatherForecastDay_Type[];
}
