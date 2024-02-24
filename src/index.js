function searhCity(city) {
  let apiKey = "333f383e0cbe5983a0300b78e5t4eo0c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}=${city}&key={apiKey}&units=metric`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
