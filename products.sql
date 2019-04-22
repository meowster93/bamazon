DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50),
department_name VARCHAR(60),
price DECIMAL(10,2) NULL,
stock_quantity INTEGER(10),
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toaster oven", "appliances", "30", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toaster", "appliances", "25", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("heater", "appliances", "45", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("box fan", "appliances", "37", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("harrys razor 2x", "beauty & personal care", "18", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3 pack deodorant", "beauty & personal care", "9", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("giovanni shampoo & conditioner", "beauty & personal care", "17", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("500ct q-tips", "beauty & personal care", "7", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("guess who", "toys & games", "10", "12");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("super fight core deck", "toys & games", "28", "30");

SELECT * FROM products;