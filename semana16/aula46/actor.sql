USE `cruz-2114668-lais-jesus`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- Exercício 1 
-- a) VARCHAR(255): uma forma de representar textos (strings), nesse caso com no máximo 255 caracteres. DATE: representa datas.
-- PRIMARY KEY: um identificador que todo item deve ter. NOT NULL:
SHOW DATABASES;
SHOW TABLES;
-- b) Mostrou o DATABASE que estamos usando e as tabelas daquele dat

