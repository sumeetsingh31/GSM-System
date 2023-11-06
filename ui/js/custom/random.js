// Function to fetch all orders
function getAllOrders() {
    fetch('http://127.0.0.1:5000/getAllOrders') // Replace 'yourdomain.com' with your domain
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            // Handle the received data here
            console.log(data); // For demonstration - you can process the data as needed
            // Example: Display order details
            data.forEach(order => {
                console.log(`Order ID: ${order.order_id}, Customer: ${order.customer_name}, Total: ${order.total}, DateTime: ${order.datetime}`);
                console.log(data); // For demonstration - you can process the data as needed
            // Example: Display order details and check if datetime is more than 10 days ago
            const tenDaysAgo = new Date();
            tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

            data.forEach(order => {
                const orderDateTime = new Date(order.datetime);
                if (orderDateTime < tenDaysAgo) {
                    // If the order datetime is more than 10 days ago, display an alert
                    alert(`Order ID ${order.order_id} has a date more than 10 days ago.`);
                }
            });
        })
        
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to fetch all orders
getAllOrders();
