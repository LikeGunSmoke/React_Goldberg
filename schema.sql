DROP DATABASE IF EXISTS ReactGoldberg;
CREATE DATABASE ReactGoldberg;

USE ReactGoldberg;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(25) UNIQUE,
  pass VARCHAR(25),
  wins INTEGER
);

INSERT INTO users (username, pass, wins) VALUES ('Admin',
'password', 0);
INSERT INTO users (username, pass, wins) VALUES ('LikeGunSmoke', 'better-password', 0);
INSERT INTO users (username, pass, wins) VALUES ('Jimbo', 'password1', 0);

-- copy commands for sake of ease

-- DROP DATABASE ReactGoldberg;
-- SELECT * FROM users;
-- mysql -u student -p // start shell, QUIT to exit shell
-- mysql -u student -p < schema.sql // load schema