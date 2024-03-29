-- Creación de la tabla Moneda
CREATE TABLE `Moneda` (
  `IDMoneda` INT PRIMARY KEY,
  `Lado` VARCHAR(255),
  `Fecha` DATE,
  `Participantes` VARCHAR(255)
);

-- Creación de la tabla Habilidad
CREATE TABLE `Habilidad` (
  `IDHabilidad` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Coste` INT
);

-- Creación de la tabla CondicionEspecial
CREATE TABLE `CondicionEspecial` (
  `IDCondicionEspecial` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Duracion` INT,
  `Efecto` VARCHAR(255)
);

-- Creación de la tabla Baraja
CREATE TABLE `Baraja` (
  `IDBaraja` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `Tipo` VARCHAR(255),
  `JugadorID` INT,
  `FechaCreacion` DATE,
  FOREIGN KEY (`JugadorID`) REFERENCES `Jugador` (`IDJugador`)
);

-- Creación de la tabla Carta
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
  `HabilidadID` INT,
  `CondicionEspecialID` INT,
  `BarajaID` INT,
  FOREIGN KEY (`HabilidadID`) REFERENCES `Habilidad` (`IDHabilidad`),
  FOREIGN KEY (`CondicionEspecialID`) REFERENCES `CondicionEspecial` (`IDCondicionEspecial`),
  FOREIGN KEY (`BarajaID`) REFERENCES `Baraja` (`IDBaraja`)
);

-- Creación de la tabla CartaEntrenador
CREATE TABLE `CartaEntrenador` (
  `IDCartaEntrenador` INT PRIMARY KEY,
  `Tipo` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `CartaID` INT, -- Agregar columna para la relación con la tabla Carta
  FOREIGN KEY (`CartaID`) REFERENCES `Carta` (`IDCarta`) -- Establecer la relación con la tabla Carta
);

-- Creación de la tabla CartaEnergia
CREATE TABLE `CartaEnergia` (
  `IDCartaEnergia` INT PRIMARY KEY,
  `Tipo` VARCHAR(255),
  `Descripcion` VARCHAR(255),
  `CartaID` INT, -- Agregar columna para la relación con la tabla Carta
  FOREIGN KEY (`CartaID`) REFERENCES `Carta` (`IDCarta`) -- Establecer la relación con la tabla Carta
);
-- Creación de la tabla Jugador
CREATE TABLE `Jugador` (
  `IDJugador` INT PRIMARY KEY,
  `Nombre` VARCHAR(255),
  `Puntaje` INT,
  `MonedaID` INT,
  FOREIGN KEY (`MonedaID`) REFERENCES `Moneda` (`IDMoneda`)
);

-- Creación de la tabla Turno
CREATE TABLE `Turno` (
  `IDTurno` INT PRIMARY KEY,
  `Jugada` VARCHAR(255),
  `CantidadEnergia` INT,
  `CantidadPokemon` INT,
  `CantidadHerramientas` INT,
  `OtroElemento` VARCHAR(255),
  `BarajaID` INT,
  FOREIGN KEY (`BarajaID`) REFERENCES `Baraja` (`IDBaraja`)
);
