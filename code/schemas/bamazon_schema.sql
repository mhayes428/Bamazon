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
VALUES ('Madden NFL 20', 'Video Games', 59.99, 45),
('World of Warcraft: Battle for Azeroth', 'Video Games', 30.97, 31),
('World of Warcraft: Legion', 'Video Games', 21.97, 27),
('World of Warcraft: Warlords of Dreanor', 'Video Games', 56.95, 33),
('World of Warcraft: Mists of Pandaria','Video Games', 18.95, 3),
('World of Warcraft: Cataclysm', 'Video Games', 11.00, 81),
('World of Warcraft: Wrath of the Lich King', 'Video Games', 15.99, 1),
('World of Warcraft: The Burning Crusade', 'Video Games', 27.99, 2),
('World of Warcraft', 'Video Games', 17.09, 10),
('Elder Scrolls: Morrowind', 'Video Games', 19.99, 6),
('Elder Scrolls: Oblivion', 'Video Games', 29.99, 14),
('Elder Scrolls: Skyrim', 'Video Games', 44.00, 58),
('No Mans Sky', 'Video Games', 19.93, 71,) 
('Pokemon: Sword and Shield', 'Video Games', 59.99, 120),
('Pokemon Stadium', 'Video Games', 29.99, 6,)
('Medieval Total War II', 'Video Games', 21.20, 1)