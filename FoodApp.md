# FoodApp Requirements

## Overview
FoodApp is a platform where multiple sellers can offer their food items, and multiple customers can browse, add items to their cart, place orders, and use vouchers provided by the admin. The application will have three main user roles: Admin, Seller, and Customer.

## User Roles and Functionalities

### Admin
- Manage vouchers.
- Oversee all activities on the platform.

### Seller
- Create and manage their food items.
- Handle orders placed by customers.

### Customer
- Create an account and manage personal details.
- Browse food items.
- Add items to the favorite list.
- Add items to the cart and place orders.
- Apply vouchers during checkout.
- Manage delivery address and location.

## Functional Requirements

### User Authentication
- Login and Registration for Admin, Seller, and Customer.

### Food Item Management
- CRUD (Create, Read, Update, Delete) operations for food items by Sellers.

### Order Management
- Customers can add items to the cart.
- Customers can place orders.
- Customers can apply vouchers.

### Voucher Management
- Admin can create and manage vouchers.

### Favorites Management
- Customers can add/remove items from their favorites list.

### Location Management
- Store and update customer location for delivery purposes.

## Non-Functional Requirements

### Security
- Data encryption.
- Secure password storage.
- Role-based access control.

### Scalability
- The system should handle a growing number of users and transactions.

### Performance
- Efficient handling of database queries.
- Fast page load times.
