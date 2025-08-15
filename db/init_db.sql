CREATE DATABASE IF NOT EXISTS ummydatabase;
USE ummydatabase;
-- create table main tables
CREATE TABLE IF NOT EXISTS roles (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    name VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20) NOT NULL UNIQUE,
    role_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS petAds (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    description VARCHAR(400),
    price INT NOT NULL
    PRIMARY KEY(id),
);
-- base roles insertion
INSERT INTO roles (name) VALUES ('admin'), ('manager'), ('customer');
-- insert users for example
INSERT INTO users (username, role_id) VALUES 
('ummy-admin', 1),  -- Assign 'admin' role
('ummy-manager', 2),    -- Assign 'manager' role
('ummy-customer', 3); -- Assign 'customer' role
