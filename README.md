

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

## Database Management

If you want to start with a fresh database, you can follow these steps:

1.  **Deleting the SQLite3 Database**: Locate the SQLite3 database file in your project directory. By default, the database file is named `db.sqlite3`. Delete this file to remove the existing database.
    
2.  **Creating Migrations**: Open the terminal and navigate to the backend directory. Run the following command to create new migrations based on the updated models:
        
    `python manage.py makemigrations` 
    
3.  **Applying Migrations**: Apply the new migrations to create the fresh database schema by running the following command:
        
    `python manage.py migrate` 

With these steps, you'll have a fresh database ready for use.

## Django Admin Panel

The Django admin panel provides an interface for managing the database and adding new data. Follow these steps to access the admin panel:

1.  Start the Django development server by running the following command:
       
    `python manage.py runserver` 
    
    The backend server will start running on `http://localhost:8000`.
    
2.  Open your web browser and navigate to `http://localhost:8000/admin`. You should see the login page for the admin panel.
    
3.  **Logging In**: Enter the admin credentials to log in.
    
    Note: It is recommended to create a new admin user and change the default credentials for security reasons.
    
4.  Once logged in, you'll have access to the admin panel's dashboard. From here, you can perform various administrative tasks such as managing users, products, orders, and more.
    
    -   **Managing Users**: You can create new user accounts, update existing accounts, or delete user accounts. Use the provided forms and fields to enter the necessary information.
        
    -   **Managing Products**: Add new products to the database by filling out the product details such as title, description, price, and category.
        
    -   **Managing Orders**: View and manage orders placed by users. You can mark orders as shipped or update their payment status.
        
    
    You can explore other sections of the admin panel to manage different aspects of the website.

## Dummy Data

The project comes with a prepopulated database containing dummy data for testing purposes. The dummy data includes products, user accounts, and sample orders.

When you set up the backend and start the server, the dummy data will be available for you to interact with. You can explore the website and perform actions such as adding products to the cart, placing orders, and managing user profiles using the provided dummy accounts.

Feel free to modify the existing data or add new data as needed for your testing and development purposes.

**Dummy User Accounts**

-   User: [a@a.com](mailto:a@a.com), Password: a
-   Admin: [su@su.com](mailto:su@su.com), Password: su

Please note that these dummy user accounts are provided for testing purposes only. It is recommended to create your own user accounts for real-world scenarios.

## Additional Information

-   The frontend code is built with React and utilizes libraries such as React Router for routing and Redux for state management. You can explore the frontend code to understand the components and their interactions.
-   The backend code is built with Django and follows the RESTful API architecture. You can explore the backend code to understand the models, serializers, and views used to implement the various endpoints.
-   The project structure follows a modular approach, with separate directories for frontend and backend code. This separation allows for easier maintenance and scalability.
-   The documentation assumes basic knowledge of React, Django, and RESTful API concepts. If you are new to these technologies, it is recommended to familiarize yourself with them before diving into the codebase.
