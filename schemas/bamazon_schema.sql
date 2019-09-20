DROP DATABASE IF EXISTS bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(200) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL (10,2) DEFAULT 0 NOT NULL,
    stock_quantity INTEGER(200),
    product_sales DECIMAL(10,2) DEFAULT 0 NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ()