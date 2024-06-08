-- Food Items
INSERT INTO food_items (name, description, price, seller_id, category_id, delivery_charge, delivery_time, rating, number_sold) VALUES
('Burger', 'Delicious beef burger', 5.99, 2, 1, 0.00, '30 mins', 4, 150),
('Pizza', 'Cheesy pizza with toppings', 7.99, 2, 1, 50.00, '45 mins', 5, 200),
('Pasta', 'Creamy Alfredo pasta', 6.99, 3, 3, 30.00, '35 mins', 3, 100),
('Salad', 'Healthy green salad', 4.99, 3, 4, 20.00, '25 mins', 4, 80),
('Sushi', 'Fresh sushi rolls', 8.99, 3, 4, 40.00, '50 mins', 5, 120);


-- Categories
INSERT INTO categories (name) VALUES
('Fast Food'),
('Cakes & Bakery'),
('Pakistani Food'),
('Deserts'),
('Juices');

-- Riders
INSERT INTO riders (user_id, status) VALUES
(6, 'available'),
(7, 'available');

-- Sellers
INSERT INTO sellers (user_id, store_name, state, city, street_address) VALUES
(2, 'Best Bites', 'Punjab', 'Lahore', '789 Gulberg Rd'),
(3, 'Yummy Foods', 'Sindh', 'Karachi', '321 Saddar Ln');

-- Customers
INSERT INTO customers (user_id, state, city, street_address) VALUES
(4, 'Punjab', 'Lahore', '123 Shadman St'),
(5, 'Sindh', 'Karachi', '456 Clifton Ave');

-- Users
INSERT INTO users (username, password, email, role) VALUES
('admin1', 'password1', 'admin1@foodapp.com', 'admin'),
('asad_ali', 'password2', 'asad_ali@foodapp.com', 'seller'),
('zia_khan', 'password3', 'zia_khan@foodapp.com', 'seller'),
('ahmed_khan', 'password4', 'ahmed_khan@foodapp.com', 'customer'),
('sara_ahmed', 'password5', 'sara_ahmed@foodapp.com', 'customer'),
('ali_haider', 'password6', 'ali_haider@foodapp.com', 'rider'),
('fatima_noor', 'password7', 'fatima_noor@foodapp.com', 'rider');

