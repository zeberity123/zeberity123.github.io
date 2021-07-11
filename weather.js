const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = "사는곳: " + data.name;
      weather.innerText = `현재날씨: ${data.weather[0].main} \n 현재온도: ${data.main.temp}'C`;
    });
}
function onGeoError() {
  alert("위치를 못찾겠어요 ㅠㅠ");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);