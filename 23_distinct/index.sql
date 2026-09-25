CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50)
);

INSERT INTO users(username) VALUES 
("sara"),
("samy"),
("john"),
("sara"),
("eva");

-- Get all names without duplicates using distinct
-- DISTINCT ignores duplicate records in search query

SELECT DISTINCT username
FROM users;