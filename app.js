document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Wireless Headphones", price: 99, description: "High-quality sound with noise cancellation" },
        { name: "Smartwatch", price: 149, description: "Track your daily activities and fitness goals" },
        { name: "Gaming Mouse", price: 49, description: "Organic design with precision tracking" }
    ];

    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    console.log("Total Price:", totalPrice);

    const container = document.querySelector('.container');
    const totalElement = document.createElement('h2');
    totalElement.textContent = `Total Price: $${totalPrice}`;
    totalElement.style.textAlign = "center";
    totalElement.style.marginTop = "20px";
    container.appendChild(totalElement);


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            products.splice(index, 1); 
            button.closest('.box-1, .box-2, .box-3').remove();
            console.log("Updated Products:", products);

            const updatedTotalPrice = products.reduce((total, product) => total + product.price, 0);
            totalElement.textContent = `Total Price: $${updatedTotalPrice}`;
        });
    });
});











