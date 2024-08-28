-- CREATE DATABASE cafe_management;

-- USE cafe_management;

-- CREATE TABLE users (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     phone_number VARCHAR(20) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role ENUM('OWNER', 'STAFF', 'CUSTOMER') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE products (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     price DECIMAL(10, 2) NOT NULL,
--     is_available BOOLEAN DEFAULT TRUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE orders (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT,
--     total_amount DECIMAL(10, 2) NOT NULL,
--     status ENUM('PENDING', 'COMPLETED', 'CANCELLED') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- CREATE TABLE order_items (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     order_id INT,
--     product_id INT,
--     quantity INT NOT NULL,
--     price DECIMAL(10, 2) NOT NULL,
--     FOREIGN KEY (order_id) REFERENCES orders(id),
--     FOREIGN KEY (product_id) REFERENCES products(id)
-- );

-- CREATE TABLE bills (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     order_id INT UNIQUE,
--     total_amount DECIMAL(10, 2) NOT NULL,
--     payment_status ENUM('PAID', 'UNPAID') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (order_id) REFERENCES orders(id)
-- );