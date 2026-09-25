-- SELF JOIN
-- a process of "JOIN" for a table with itself
CREATE DATABASE learn_sql_db;

CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(4,2) DEFAULT 0.00,
    job VARCHAR(50) NOT NULL,
    hire_date DATETIME DEFAULT NOW(),
    supervisor_id INT
);

INSERT INTO employees(first_name,last_name,hourly_pay,job, hire_date, supervisor_id) VALUES
("Ahmad", "Hassan", 25.50, "manager", "2024-01-02", NULL),
("Ali", "Mahmoud", 15.00, "cashier", "2024-02-02", 5),
("Ali", "Nasser", 12.50, "cook", "2024-02-04", 5),
("Amina", "Ahmad", 15.50, "cook", "2024-02-07", 5),
("Hady", "Charaf", 20.50, "asst.", "2022-01-07", 1),
("Yousuf", "Mahmoud", 18.00, "IT", "2024-01-07", 5);

-- Select all employees with the name of the employer that they report to
SELECT CONCAT(E1.first_name, ' ',E1.last_name) AS employee_full_name, CONCAT(E2.first_name, ' ',E2.last_name) AS reports_to
FROM employees AS E1 INNER JOIN employees AS E2
ON E1.supervisor_id = E2.id;