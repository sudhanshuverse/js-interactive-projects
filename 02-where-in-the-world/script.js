document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.querySelector('.countries-container');
    const filterByRegion = document.getElementById('regionFilter');
    const searchInput = document.getElementById('searchInput');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const suggestionsList = document.getElementById('suggestions');

    let allCountryData = [];

    // SHIMMER LOADING
    function showShimmer(count = 12) {
        countriesContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const card = document.createElement('div');
            card.classList.add('country-card', 'shimmer-card');
            card.innerHTML = `
                <div class="shimmer" style="height:150px;"></div>
                <div class="shimmer-text" style="width:70%;"></div>
                <div class="shimmer-text" style="width:50%;"></div>
                <div class="shimmer-text" style="width:60%;"></div>
            `;
            countriesContainer.appendChild(card);
        }
    }

    // RENDER COUNTRY CARDS
    function renderCountries(data) {
        countriesContainer.innerHTML = '';

        if (!Array.isArray(data) || data.length === 0) {
            countriesContainer.innerHTML = '<p class="error-message">No countries found.</p>';
            return;
        }

        data.forEach(country => {
            const card = document.createElement('a');
            card.classList.add('country-card');
            card.href = `country.html?name=${encodeURIComponent(country.name.common)}`;
            card.innerHTML = `
                <img src="${country.flags.svg}" alt="${country.name.common}">
                <div class="card-text">
                    <h3>${country.name.common}</h3>
                    <p><b>Region:</b> ${country.region || 'N/A'}</p>
                    <p><b>Capital:</b> ${country.capital ? country.capital[0] : 'N/A'}</p>
                    <p><b>Population:</b> ${country.population ? country.population.toLocaleString() : 'N/A'}</p>
                </div>
            `;
            countriesContainer.appendChild(card);
        });
    }

    // FETCH COUNTRIES
    async function fetchCountries() {
        showShimmer();
        try {
            const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags');
            if (!res.ok) throw new Error('Failed to fetch countries');
            const data = await res.json();
            if (!Array.isArray(data)) throw new Error('Invalid data format');

            allCountryData = data;
            renderCountries(allCountryData);
        } catch (err) {
            console.error(err);
            countriesContainer.innerHTML = `<p class="error-message">Error loading countries. Please try again later.</p>`;
        }
    }

    // APPLY FILTERS (SEARCH + REGION)
    function applyFilters() {
        const region = filterByRegion.value || '';
        const query = searchInput.value.trim().toLowerCase();

        let filtered = allCountryData;

        if (region) {
            filtered = filtered.filter(c => c.region && c.region.toLowerCase() === region.toLowerCase());
        }

        if (query) {
            filtered = filtered.filter(c => c.name && c.name.common && c.name.common.toLowerCase().includes(query));
        }

        renderCountries(filtered);
    }

    // AUTOCOMPLETE RECOMMENDATIONS
    function showSuggestions(query) {
        suggestionsList.innerHTML = '';
        if (!query) {
            suggestionsList.style.display = 'none';
            return;
        }

        const matches = allCountryData
            .filter(c => c.name && c.name.common.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 8); // show only top 8

        if (matches.length === 0) {
            suggestionsList.style.display = 'none';
            return;
        }

        matches.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country.name.common;
            li.addEventListener('click', () => {
                searchInput.value = country.name.common;
                suggestionsList.style.display = 'none';
                applyFilters();
            });
            suggestionsList.appendChild(li);
        });

        suggestionsList.style.display = 'block';
    }

    filterByRegion.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', () => {
        applyFilters();
        showSuggestions(searchInput.value.trim());
    });

    // Hide suggestions if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            suggestionsList.style.display = 'none';
        }
    });

    
    // DARK/LIGHT MODE TOGGLE
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>&nbsp; Light Mode';
        } else {
            darkModeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode';
        }
    });

    // INITIAL FETCH
    fetchCountries();
});
