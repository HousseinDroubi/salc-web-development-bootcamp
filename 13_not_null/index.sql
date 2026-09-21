-- NOT NULL when creating a table used to prevent assigning a value as NULL for a column
CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL
);

-- The following query will throw an error if executed
-- INSERT INTO users VALUES (
--     1, "Houssein", "Droubi", NULL
-- );