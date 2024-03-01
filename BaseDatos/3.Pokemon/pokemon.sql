CREATE TABLE `Jugador` (
  `IDJugador` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Puntaje` INT,
  `MonedaID` INT
);

CREATE TABLE `Baraja` (
  `IDBaraja` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Tipo` VARCHAR(255),
  `JugadorID` INT
);

CREATE TABLE `Carta` (
  `IDCarta` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `TipoCarta` VARCHAR(255),
  `FaseDeEvolucion` INT,
  `PS` INT,
  `Ataque` INT,
  `DanoDeAtaque` INT,
  `ContadorDeDano` INT,
  `Debilidad` INT,
  `Resistencia` INT,
  `Habilidad` INT,
  `BarajaID` INT
);

CREATE TABLE `CartaEntrenador` (
  `IDCartaEntrenador` INT PRIMARY KEY,
  `Tipo` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `CartaID` INT
);

CREATE TABLE `CartaEnergia` (
  `IDCartaEnergia` INT PRIMARY KEY,
  `Tipo` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `CartaID` INT
);

CREATE TABLE `Moneda` (
  `Lado` VARCHAR(255) PRIMARY KEY
);

CREATE TABLE `Habilidad` (
  `IDHabilidad` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Coste` INT,
  `CartaID` INT
);

CREATE TABLE `CondicionEspecial` (
  `IDCondicionEspecial` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Duracion` INT,
  `Efecto` VARCHAR(255),
  `CartaID` INT
);

ALTER TABLE `CartaEnergia` ADD FOREIGN KEY (`Tipo`) REFERENCES `CartaEntrenador` (`IDCartaEntrenador`);

ALTER TABLE `Carta` ADD FOREIGN KEY (`Nombre`) REFERENCES `CartaEntrenador` (`IDCartaEntrenador`);

ALTER TABLE `Carta` ADD FOREIGN KEY (`FaseDeEvolucion`) REFERENCES `CartaEntrenador` (`IDCartaEntrenador`);

ALTER TABLE `Baraja` ADD FOREIGN KEY (`JugadorID`) REFERENCES `Jugador` (`IDJugador`);

ALTER TABLE `Carta` ADD FOREIGN KEY (`Nombre`) REFERENCES `Baraja` (`IDBaraja`);

ALTER TABLE `Carta` ADD FOREIGN KEY (`IDCarta`) REFERENCES `Habilidad` (`IDHabilidad`);

ALTER TABLE `Carta` ADD FOREIGN KEY (`IDCarta`) REFERENCES `CondicionEspecial` (`IDCondicionEspecial`);

ALTER TABLE `Jugador` ADD FOREIGN KEY (`MonedaID`) REFERENCES `Moneda` (`Lado`);
