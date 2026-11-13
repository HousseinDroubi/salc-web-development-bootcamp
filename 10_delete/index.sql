CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(4,2),
    hire_date DATE
);

INSERT INTO users VALUES
(1,"Houssein","Droubi",12.3,"2026-10-20"),
(2,"Ali","Hassan",20.5,"2026-08-20"),
(3,"Mahmoud","Sayed",12,"2024-08-20"),
(4,"Sawsan","Karakalla",15,"2010-10-20"),
(5,"Ali","Charaf",15,"2026-10-20"),
(6,"Samy","Kaafarany",17,NULL);

-- delete all users that have hire date is null
DELETE FROM users
WHERE hire_date IS NULL;

-- delete user with id = 5
DELETE FROM users
WHERE id = 5;

-- delete all users
DELETE FROM users;