const countriesRow = document.querySelector(".countries-row");
const searchInput = document.querySelector(".search-input");
let search = "";

function getCountriesCards(el) {
  return `<div class="card">
  <img src="${el.flags.svg}" alt="${el.name.common}" />
  <h3>${el.name.common}</h3>
  <p>${el.continents[0]}</p>
    </div>`;
}

async function getCountries() {
  try {
    countriesRow.innerHTML = "Loading...";
    let url = search
      ? `https://restcountries.com/v3.1/name/${search}`
      : `https://restcountries.com/v3.1/all`; // Dastlabki holatda barcha mamlakatlar
    let countries = await getData(url);
    console.log(countries);
    countriesRow.innerHTML = "";
    countries.forEach((el) => {
      countriesRow.innerHTML += getCountriesCards(el);
    });
  } catch (error) {
    console.log(error);
    countriesRow.innerHTML = `<p>Error fetching countries data.</p>`;
  }
}

getCountries();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim(); // Bo'sh joylarni olib tashlash
  getCountries();
});
