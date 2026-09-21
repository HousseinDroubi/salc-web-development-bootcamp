-- Using constraints, we can implement kind of validation for our columns
CREATE DATABASE learn_sql_db;

CREATE TABLE users(
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(4,2),
    hired_date_time DATETIME,
    CONSTRAINT check_hourly_pay CHECK (hourly_pay >= 10.00)
);

INSERT INTO users VALUES
(1,"Houssein","Droubi", 20.00, NOW());

-- The following query will throw an error if executed due to CONSTRAINT "check_hourly_pay"
INSERT INTO users VALUES
(2,"Ali","Charaf",9.00, NOW());