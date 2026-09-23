-- AUTO_INCREMENT is a keyword that is used to automatically add the id by 1 on last id value

CREATE DATABASE learn_sql_db;

CREATE TABLE transactions(
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(4,2)
);

-- Here I'm inserting the id, which is not important
INSERT INTO transactions VALUES
(1, 10.40),
(2, 3.40),
(3, 99);

-- Instead, you can do the following:
INSERT INTO transactions(amount) VALUES
(10.40),
(3.40),
(99);

-- Or, you can also do the following:
INSERT INTO transactions VALUES
(NULL, 10.40),
(NULL, 3.40),
(NULL, 99);

-- Let's say thatr I want the id column to start from 1000
CREATE TABLE transactions(
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(4,2)
);

ALTER TABLE transactions
AUTO_INCREMENT = 1000;