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
INSERT INTO users (username, userpassword, account_type) VALUES("admin3", "827ccb0eea8a706c4c34a16891f84e7b", "admin");
INSERT INTO users (username, userpassword, account_type)VALUES("business123", 

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
place_description VARCHAR(1000),
PRIMARY KEY(place_name)
);

INSERT INTO foodPlaces VALUES("Some random cafe", "owner name", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES("A food bank", "owner name", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES("Another cafe", "owner name", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");

select * from organisations;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

