-- Create domain for user roles
CREATE DOMAIN user_role AS VARCHAR(20) CHECK (
    VALUE IN ('admin', 'seller', 'customer', 'rider')
);
-- Create domain for order status
CREATE DOMAIN order_status AS VARCHAR(50) CHECK (
    VALUE IN ('placed', 'ready', 'picked_up', 'delivered')
);
-- Create domain for rider status
CREATE DOMAIN rider_status AS VARCHAR(50) CHECK (VALUE IN ('available', 'busy'));
-- Create User table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    -- underlying type of SERIAL is INT
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role user_role NOT NULL
);
-- Create Customer table
CREATE TABLE customers (
    user_id INT PRIMARY KEY REFERENCES users(user_id),
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    street_address VARCHAR(255) NOT NULL
);
-- Create Seller table
CREATE TABLE sellers (
    user_id INT PRIMARY KEY REFERENCES users(user_id),
    store_name VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    street_address VARCHAR(255) NOT NULL
);
-- Create Rider table
CREATE TABLE riders (
    user_id INT PRIMARY KEY REFERENCES users(user_id),
    status rider_status NOT NULL
);
-- Create Category table
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
-- Create FoodItem table with numeric delivery_charge
CREATE TABLE food_items (
    food_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    seller_id INT REFERENCES sellers(user_id),
    category_id INT REFERENCES categories(category_id),
    delivery_charge NUMERIC(10, 2) NOT NULL,
    delivery_time VARCHAR(50) NOT NULL,
    rating decimal(2, 1) CHECK (
        rating >= 1.0
        AND rating <= 5.0
    ),
    number_sold INT DEFAULT 0
);
-- Create Order table with domain for status
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(user_id),
    total_price NUMERIC(10, 2) NOT NULL,
    order_date TIMESTAMP NOT NULL,
    status order_status NOT NULL,
    rider_id INT REFERENCES riders(user_id)
);
-- Create OrderItem table
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    food_id INT REFERENCES food_items(food_id),
    quantity INT NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);
-- Create Cart table
CREATE TABLE carts (
    cart_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(user_id)
);
-- Create CartItem table
CREATE TABLE cart_items (
    cart_item_id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES carts(cart_id),
    food_id INT REFERENCES food_items(food_id),
    quantity INT NOT NULL
);
-- Create Favorite table
CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(user_id),
    food_id INT REFERENCES food_items(food_id)
);
-- Create Voucher table
CREATE TABLE vouchers (
    voucher_id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    discount NUMERIC(5, 2) NOT NULL,
    expiry_date DATE NOT NULL
);
-- Create AppliedVoucher table
CREATE TABLE applied_vouchers (
    applied_voucher_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    voucher_id INT REFERENCES vouchers(voucher_id)
);