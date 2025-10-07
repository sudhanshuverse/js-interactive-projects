const countryName = new URLSearchParams(window.location.search).get('name');
const viewCountryContainer = document.querySelector('.view-country-container');
const viewCountryCard = document.createElement('div');
viewCountryCard.classList.add('view-country-card');

// Step 1: Show shimmer placeholder first
viewCountryCard.innerHTML = `
    <div class="image-section shimmer"></div>
    <div class="text-section">
        <div class="more-details">
            <div class="first-text shimmer-text"></div>
            <div class="second-text shimmer-text"></div>
        </div>
        <div class="links shimmer-text"></div>
    </div>
`;
viewCountryContainer.append(viewCountryCard);

// Step 2: Fetch real data
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(async data => {
        const country = data[0];

        const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A";
        const capital = country.capital ? country.capital.join(", ") : "N/A";
        const subregion = country.subregion || "N/A";
        const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";

        let borderCountriesHTML = "No border countries";
        if (country.borders && country.borders.length > 0) {
            const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`);
            const borderData = await borderResponse.json();
            borderCountriesHTML = borderData.map(borderCountry =>
                `<a href="country.html?name=${borderCountry.name.common}">${borderCountry.name.common}</a>`
            ).join(" ");
        }

        // Step 3: Replace shimmer with real data
        viewCountryCard.innerHTML = `
            <div class="image-section">
                <img src="${country.flags.svg}" alt="${country.name.common}">
            </div>
            <div class="text-section">
                <h1>${country.name.common}</h1>
                <div class="more-details">
                    <div class="first-text">
                        <p><strong>Native Name: </strong> ${country.name.official}</p>
                        <p><strong>Capital: </strong> ${capital}</p>
                        <p><strong>Region: </strong> ${country.region}</p>
                        <p><strong>Sub Region: </strong> ${subregion}</p>
                        <p><strong>Population: </strong> ${country.population.toLocaleString()}</p>
                    </div>
                    <div class="second-text">
                        <p><strong>Top Level Domain: </strong> ${country.tld}</p>
                        <p><strong>Currencies: </strong> ${currencies}</p>
                        <p><strong>Languages: </strong> ${languages}</p>
                    </div>
                </div>
                <div class="links">
                    <p><strong>Border Countries: </strong> ${borderCountriesHTML}</p>
                </div>
            </div>
        `;
    })
    .catch(err => {
        console.error(err);
        viewCountryCard.innerHTML = `<p style="color:red;">Failed to load country data</p>`;
    });


const body = document.querySelector('body');
// DARK/LIGHT MODE TOGGLE
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>&nbsp; Light Mode';
    } else {
        darkModeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode';
    }
});