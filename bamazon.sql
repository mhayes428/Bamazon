CREATE DATABASE bamazon_db;

  USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price FLOAT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
      VALUE("World of Warcraft", "Video Games", 59.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Madden NFL 20", "Video Games", 59.99, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("No Mans Sky", "Video Games", 350.00, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Medieval Total War II", "Video Games", 19.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("NHL 20", "Video Games", 59.99, 59);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Pokémon: Sword and Shield", "Video Games", 59.99, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("NBA 2k20", "Video Games", 59.99, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Call of Duty: Modern Warfare", "Video Games", 59.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Elder Scrolls: Skyrim", "Video Games", 49.99, 51);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUE("Pokémon Stadium", "Video Games", 29.99, 3);