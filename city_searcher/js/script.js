const endpoint = 'https://gautam-bits.github.io/js-practice/city_searcher/asssets/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
console.log(cities.length);
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    
    return place.city.match(regex) || place.admin.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.admin.replace(regex, `<span class="hl">${this.value}</span>`);
    const link = `https://www.google.com/search?source=hp&ei=dTvhXoXgGsr0rAHv76a4Dg&q=${cityName}&oq=jaipur&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyAggAMgUIABCxAzICCAAyAggAMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6BQgAEIMBUNQFWJkYYNUZaABwAHgAgAGUA4gBgQmSAQkwLjMuMS4wLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjF7pKshPjpAhVKOisKHe-3CecQ4dUDCAc&uact=5`
    const htmllink = `<a href = "${link}" > `;
    console.log(htmllink)
    return `
      <li>
        <span class="name">${cityName}, ${stateName} </span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  console.log(cities.length);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
//https://www.google.com/search?source=hp&ei=dTvhXoXgGsr0rAHv76a4Dg&q=mumbai&oq=jaipur&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyAggAMgUIABCxAzICCAAyAggAMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6BQgAEIMBUNQFWJkYYNUZaABwAHgAgAGUA4gBgQmSAQkwLjMuMS4wLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjF7pKshPjpAhVKOisKHe-3CecQ4dUDCAc&uact=5
