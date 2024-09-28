const searchProduct = async (e) => {
    e.preventDefault();

    // afisam loading spinner & ascundem text buton
    searchSpinner.style.display = 'block';
    searchButtonText.style.display = 'none';

    // luam id-ul introdus de user
    const formData = new FormData(searchForm);
    const productId = formData.get('product-id');

    try {
        const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const productData = await serverResponse.json();

        // generateProductCards(productData);
        console.log(productData);
        const generateProductCards = (productData) => {
            // Select the products section
            const productsSection = document.querySelector('.products-section');

            // Create a new div element
            const productCard = document.createElement('div');

            // Add some content to the card
            productCard.innerHTML = `
                <h2>${productData.title}</h2>
                <p>${productData.description}</p>
                <p>Price: ${productData.price}</p>
            `;

            // Append the card to the products section
            productsSection.appendChild(productCard);
        };


    } catch (error) {
        // daca serverul nu a gasit produsul, sa afisam un text "No matches found"
        productsSection.innerHTML = '<p>No matches found</p>';
    } finally {
        // ascundem loading spinner & afisam text buton
        searchSpinner.style.display = 'none';
        searchButtonText.style.display = 'block';
    }

};
