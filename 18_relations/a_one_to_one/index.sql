CREATE DATABASE learn_sql_db;

--1) Create table users
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);

--2) Update AUTO_INCREMENT for users.id
ALTER TABLE users
AUTO_INCREMENT = 1001;

--3) Create table health_profiles, and add the foreign key
CREATE TABLE health_profiles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    blood_type VARCHAR(3),
    create_at DATETIME DEFAULT NOW(),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Or you can create table health_profiles, and add the foreign key after creating the table
CREATE TABLE health_profiles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    blood_type VARCHAR(3),
    create_at DATETIME DEFAULT NOW(),
    user_id INT
);

ALTER TABLE health_profiles
ADD FOREIGN KEY(user_id) REFERENCES users(id);

-- Add rows in table users
INSERT INTO users VALUES
(NULL, 'Houssein', 'Droubi',29),
(NULL, 'Ali', 'Hijazi', 22),
(NULL, 'Mouhammad', 'Elghoul', 25);

-- Add rows in table health_profiles
INSERT INTO health_profiles VALUES
(NULL, 'B+', NOW(), 1001),
(NULL, 'A+', NOW(), 1002),
(NULL, 'A-', NOW(), 1003);

-- A very very important note:
-- Try to delete users where id = 1001
DELETE FROM users WHERE id = 1001; -- This will throw an error. Why? because, there is a row inside health_profiles that is related to it.
-- What is the solution?

    -- Solution 1: Delete the related rows first
    DELETE FROM health_profiles WHERE user_id = 1001; 
    DELETE FROM users WHERE id = 1001; 

    -- Solution 2: Using on delete cascade and on delete set null. Will be explained later
