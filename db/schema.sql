CREATE DATABASE if NOT EXISTS burgers_db;

USE burgers_db;

DROP TABLE if EXISTS burgers; 

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOL DEFAULT FALSE,
    PRIMARY KEY (id)
);