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
INSERT INTO users VALUES("Will", "Jones", "will123", "827ccb0eea8a706c4c34a16891f84e7b", "mathhew.chinnery@gmail.com", "admin");

create table pending (
username VARCHAR(128),
email VARCHAR(128),
address VARCHAR(128),
business_name VARCHAR(90),
business_info VARCHAR(250),
postcode VARCHAR(100),
account_type VARCHAR(50) DEFAULT 'business',
PRIMARY KEY(username)
);

select * from pending;

create table stock (
id INT NOT NULL	AUTO_INCREMENT,
place_id VARCHAR (100),
item_name VARCHAR(90),
item_description VARCHAR(1000),
quantity INT,
expiry VARCHAR(50),
filter VARCHAR(100),
PRIMARY KEY(id)
);

select * from stock;

INSERT INTO stock VALUES(1, "Some random cafe", "Apple", "apple fruit", 100, "30/05/2023");

create table foodPlaces (
id INT NOT NULL	AUTO_INCREMENT,
place_name VARCHAR(100) NOT NULL,
place_username VARCHAR (100),
place_email VARCHAR(100),
place_address VARCHAR(500),
place_postcode VARCHAR(100),
place_description VARCHAR(250),
PRIMARY KEY(id)
);
	
select * from foodPlaces;

create table donations (
id INT NOT NULL	AUTO_INCREMENT,
donor_username VARCHAR(45),
place_id VARCHAR (100),
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

INSERT INTO foodPlaces VALUES(1, "Some random cafe", "john123", "mathhew.chinnery@gmail.com", "business address", "Gs1", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES(2, "A food bank", "owner name", "mathhew.chinnery@gmail.com", "business address", "GS1", "infoinfoinfoinfoinfoinfoinfoinfoinfo");
INSERT INTO foodPlaces VALUES(3, "Another cafe", "owner name", "mathhew.chinnery@gmail.com", "business address", "Gs1", "infoinfoinfoinfoinfoinfoinfoinfoinfo");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

drop table users;
drop table pending;
drop table foodPlaces;
drop table donations;
drop table donation_items;
drop table stock
