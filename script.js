const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        searchResults.innerHTML = '';
        fetch(`https://api.example.com/products?search=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((product) => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="product-card__image">
                        <h3 class="product-card__name">${product.name}</h3>
                        <p class="product-card__price">${product.price}</p>
                        <a href="${product.url}" class="product-card__button">Buy Now</a>
                    `;
                    searchResults.appendChild(productCard);
                });
            })
            .catch((error) => {
                console.error(error);
                searchResults.innerHTML = '<p>Sorry, there was an error loading the products. Please try again later.</p>';
            });
    }
});
