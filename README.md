
# Ecommerce Website Documentation

## Project Overview

This project is an ecommerce website built with React (frontend) and Django (backend). The website allows users to browse and buy products, add products to the cart, place orders, manage their profile and orders. There is also a wishlist feature where users can add products they wish for, and an admin can view the wishlist. The website requires users to register and login to access certain features such as the wishlist and placing orders. Admins have additional functionalities such as managing products and marking orders as shipped.

## Getting Started

To get started with the project, follow the steps below:

### Frontend Setup

1.  Make sure you have Node.js and npm installed on your machine.
2.  Open the terminal and navigate to the frontend directory.
3.  Run the following command to install the required dependencies:
      
    `npm install` 
    
4.  After the installation is complete, start the development server by running the following command:
      
    `npm start` 
    
5.  The frontend server should start running on `http://localhost:3000`. You can access the website by opening this URL in your browser.

### Backend Setup

1.  Make sure you have Python and pip installed on your machine.
2.  Open the terminal and navigate to the backend directory.
3.  It is recommended to create a virtual environment for the project. You can create a virtual environment by running the following command:
       
    `python -m venv env` 
    
4.  Activate the virtual environment. (Note: The command may vary depending on your operating system)
5.  Install the required Python packages by running the following command:
        
    `pip install -r requirements.txt` 
    
6.  Start the Django development server by running the following command:
        
    `python manage.py runserver` 
    
7.  The backend server should start running on `http://localhost:8000`. The API endpoints will be accessible through this URL.

## API Endpoints

The backend provides the following API endpoints:

### Order Endpoints

-   `POST /api/orders/add/`: Create a new order.
-   `GET /api/orders/myorders/`: Get a list of orders placed by the logged-in user.
-   `GET /api/orders/<str:pk>/`: Get details of a specific order by ID.
-   `PUT /api/orders/<str:pk>/pay/`: Update the payment status of an order.
-   `PUT /api/orders/<str:pk>/deliver/`: Mark an order as delivered.

### Product Endpoints

-   `GET /api/products/`: Get a list of all products.
-   `POST /api/products/add/`: Add a new product to the wishlist.
-   `GET /api/products/wishlist/`: Get a list of products in the wishlist.
-   `GET /api/products/categories/`: Get a list of available categories.
-   `GET /api/products/<str:pk>/`: Get details of a specific product by ID.
-   `GET /api/products/category/<str:category>/`: Get a list of products in a specific category.

### User Endpoints

-   `POST /api/users/login/`: User login.
-   `POST /api/users/register/`: User registration.
-   `GET /api/users/profile/`: Get the profile details of the logged-in user.
-   `PUT /api/users/profile/update/`: Update the profile details of the logged-in user.
-   `GET /api/users/<str:pk>/`: Get details of a specific user by ID (admin only).
