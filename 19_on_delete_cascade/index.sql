-- AUTO_INCREMENT is a keyword that is used to automatically add the id by 1 on last id value

CREATE DATABASE learn_sql_db;

-- Here we have one to many relation. One user can have multiple transactions

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50)
);


CREATE TABLE transactions(
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(4,2),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE -- here, if any user delete any related row, will be deleted as well
);

INSERT INTO users VALUES
(NULL,"houssein"),
(NULL,"Ali");

INSERT INTO transactions VALUES
(NULL,10,1),
(NULL,20,1),
(NULL,30,1),
(NULL,40,2);