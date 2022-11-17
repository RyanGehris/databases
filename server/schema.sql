DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL,
  userid int NOT NULL,
  chatter VARCHAR(1000),
  roomid int NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int NOT NULL,
  username VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

