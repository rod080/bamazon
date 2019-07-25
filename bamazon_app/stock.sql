
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name varchar(100),
department_name varchar(100),
price float (7),
stock int (6),
PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('book 1', 'books', 9.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('book 2', 'books', 9.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('book 3', 'books', 9.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('book 4', 'books', 9.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('book 5', 'books', 9.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('tv1', 'tech', 199.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('tv2', 'tech', 299.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('tv3', 'tech', 399.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('pc1', 'tech', 699.99, 20);
INSERT INTO products (product_name, department_name, price, stock) VALUES ('pc2', 'tech', 999.99, 20);
select * from products;

SET SQL_SAFE_UPDATES = 0;