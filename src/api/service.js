import axios from "axios";

export function getDataWeather(lat, lng) {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`,
  });
}
