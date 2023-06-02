create database synoptic;

use synoptic;

create table users (
first_name VARCHAR (90),
last_name VARCHAR(90),
username VARCHAR(45),
userpassword VARCHAR(128),
email VARCHAR(128),
account_type VARCHAR(50) DEFAULT 'user', 
PRIMARY KEY(username)
);

select * from users;
INSERT INTO users (username, userpassword, account_type) VALUES("admin", "12345", "admin");


create table stock (
id INT NOT NULL	AUTO_INCREMENT,
place_name VARCHAR (100),
meal_name VARCHAR(90),
meal_description VARCHAR(1000),
quantity INT,
expiry VARCHAR(50),
PRIMARY KEY(id)
);

INSERT INTO stock VALUES(1, "Some random cafe", "Apple", "apple fruit", 100, "30/05/2023");

create table foodPlaces (
place_name VARCHAR(100) NOT NULL,
place_owner VARCHAR(100),
place_address VARCHAR(500),
PRIMARY KEY(place_name)
);

INSERT INTO foodPlaces VALUES("Some random cafe", "owner name", "business address");
INSERT INTO foodPlaces VALUES("A food bank", "owner name", "business address");
INSERT INTO foodPlaces VALUES("Another cafe", "owner name", "business address");

select * from organisations;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

