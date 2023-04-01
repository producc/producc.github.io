// Load product data from API
function loadProducts(searchTerm) {
    fetch(`https://api.example.com/products?search=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            // Process and display product data on the page
        })
        .catch(error => {
            console.error(error);
            // Display an error message to the user
        });
}

// Handle form submission
const searchForm = document.querySelector('form');
const searchInput = searchForm.querySelector('input[type="text"]');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        loadProducts(searchTerm);
    }
});
