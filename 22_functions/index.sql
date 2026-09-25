CREATE DATABASE learn_sql_db;

CREATE TABLE customers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE transactions(
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(5,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

ALTER TABLE transactions
AUTO_INCREMENT = 1000;


INSERT INTO customers(first_name, last_name) VALUES
("Mouhammad", "Charaf"),
("Hady", "Mousataf"),
("Alaa", "Al-Amin"),
("Houssein", "Ahmad");

INSERT INTO transactions(amount, customer_id) VALUES
(4.99, 3),
(2.89, 2),
(3.38, 3),
(4.99, 1),
(2.89, NULL);

-- get the number of transactions (using COUNT function)

SELECT COUNT(id) AS 'number_of_transactions'
FROM transactions;


-- get the minimum amount of transactions (using MIN function)

SELECT MIN(amount) AS 'minimum_transaction_amount'
FROM transactions;

-- get the maximum amount of transactions (using MAX function)

SELECT MAX(amount) AS 'maximum_transaction_amount'
FROM transactions;

-- get the summation of amount of transactions (using SUM function)

SELECT SUM(amount) AS 'total_amount_of_transactions'
FROM transactions;

-- get the average of amount of transactions (using AVG function)

SELECT AVG(amount) AS 'average_amount_of_transactions'
FROM transactions;

-- get the full name of customers (using concat function)

SELECT CONCAT(first_name, ' ', last_name) AS 'full_name'
FROM customers;