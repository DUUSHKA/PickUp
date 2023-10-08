CREATE DATABASE pickup;
USE pickup;

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    difficulty INT NOT NULL,
    game_type VARCHAR(255) NOT NULL,
    is_public BOOLEAN NOT NULL,
    password VARCHAR(255)
);
