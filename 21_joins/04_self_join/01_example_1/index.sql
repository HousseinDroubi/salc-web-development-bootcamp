-- SELF JOIN
-- a process of "JOIN" for a table with itself
CREATE DATABASE learn_sql_db;

CREATE TABLE customers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    referral_id INT
);

INSERT INTO customers(first_name, last_name, referral_id) VALUES
("Mahmoud", "Ahmad", NULL),
("Noor", "Charaf", 1),
("Amina", "Saleh", 2),
("Ali", "Al-Amin", 2);

-- SELECT all customers with the name of the customer that they refer a job to

SELECT CONCAT(C1.first_name," " ,C1.last_name) AS customer_full_name, CONCAT(C2.first_name," " ,C2.last_name) AS refers_to
FROM customers AS C1 INNER JOIN customers AS C2
ON C1.referral_id = C2.id;