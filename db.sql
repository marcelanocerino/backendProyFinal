CREATE DATABASE Treyo;
CREATE TABLE USER (
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    usuario varchar(50),
    contrasena varchar(50)
)
CREATE TABLE USER-BOARD (
    id int PRIMARY KEY AUTO_INCREMENT,
    idUser int,
    idBoard int
)
CREATE TABLE BOARD (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(30),
    color varchar(30)
)
CREATE TABLE BOARD-LIST (
    id int PRIMARY KEY AUTO_INCREMENT,
    idList int,
    idBoard int
)
CREATE TABLE LIST (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(50)
)
CREATE TABLE LIST-TASK (
    id int PRIMARY KEY AUTO_INCREMENT,
    idList int,
    idTask int
)
CREATE TABLE TASK (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(50),
    cuerpo text,
    prioridad int,
    fechaCreacion date,
    fechaActualizacion date
)

ALTER TABLE TASK ADD FOREIGN KEY (autor) REFERENCES USER(id);
ALTER TABLE USER-BOARD ADD FOREIGN KEY (idUser) REFERENCES USER(id);
ALTER TABLE USER-BOARD ADD FOREIGN KEY (idBoard) REFERENCES BOARD(id);
ALTER TABLE BOARD-LIST ADD FOREIGN KEY (idBoard) REFERENCES BOARD(id);
ALTER TABLE BOARD-LIST ADD FOREIGN KEY (idList) REFERENCES LIST(id);
ALTER TABLE LIST-TASK ADD FOREIGN KEY (idList) REFERENCES LIST(id);
ALTER TABLE LIST-TASK ADD FOREIGN KEY (idTask) REFERENCES TASK(id);


