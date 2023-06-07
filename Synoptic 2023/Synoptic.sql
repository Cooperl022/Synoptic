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

/* Account types = 'user', 'business', 'admin'
	Admin account can be created here, just need 
    registration form for user/business */

select * from users;
/* Test users - passwrod = '12345' */
INSERT INTO users (username, userpassword, account_type) VALUES("admin", "827ccb0eea8a706c4c34a16891f84e7b", "admin");
INSERT INTO users (username, userpassword, email, account_type) VALUES("business123", "827ccb0eea8a706c4c34a16891f84e7b", "business@business.com", "business");
INSERT INTO users VALUES("user", "name", "username123", "827ccb0eea8a706c4c34a16891f84e7b", "user@user.com", "user");

create table stock (
id INT NOT NULL	AUTO_INCREMENT,
place_id VARCHAR (100),
item_name VARCHAR(90),
item_description VARCHAR(1000),
quantity INT,
expiry VARCHAR(50),
religion_filter VARCHAR(100),
PRIMARY KEY(id)
);

select * from stock;

INSERT INTO stock VALUES(1, "Some random cafe", "Apple", "apple fruit", 100, "30/05/2023");

create table foodPlaces (
id INT NOT NULL	AUTO_INCREMENT,
place_name VARCHAR(100) NOT NULL,
place_username VARCHAR(100) NOT NULL,
place_address VARCHAR(500),
place_description VARCHAR(1000),
PRIMARY KEY(id)
);

create table donations (
id INT NOT NULL	AUTO_INCREMENT,
donor_username VARCHAR(45),
place_name VARCHAR (100),
PRIMARY KEY(id)
);

select * from donations;

create table donation_items (
id INT NOT NULL	AUTO_INCREMENT,
donation_id INT NOT NULL,
item_name VARCHAR(90),
item_description VARCHAR(1000),
quantity INT,
expiry VARCHAR(50),
PRIMARY KEY(id)
);

select * from donation_items;

INSERT INTO foodPlaces VALUES(1, "Some random cafe", "business123", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES(2, "A food bank", "owner name", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES(3, "Another cafe", "owner name", "business address", "infoinfoinfoinfoinfoinfoinfoinfoinfo");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

