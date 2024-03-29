-- Inserción en la tabla Moneda
INSERT INTO `Moneda` (`IDMoneda`, `Lado`, `Fecha`, `Participantes`) VALUES
(1, 'Cara', '2024-01-01', 'Ash, Gary'),
(2, 'Sello', '2024-01-02', 'Ash, Misty');

-- Inserción en la tabla Jugador
INSERT INTO `Jugador` (`IDJugador`, `Nombre`, `Puntaje`, `MonedaID`) VALUES
(1, 'Ash Ketchum', 1000, 1),
(2, 'Gary Oak', 950, 1),
(3, 'Misty Waterflower', 850, 2);

-- Inserción en la tabla Baraja
INSERT INTO `Baraja` (`IDBaraja`, `Nombre`, `Descripcion`, `Tipo`, `JugadorID`, `FechaCreacion`) VALUES
(1, 'Baraja de Ash', 'Baraja principal de Ash', 'Principal', 1, '2024-01-01'),
(2, 'Baraja de Gary', 'Baraja principal de Gary', 'Principal', 2, '2024-01-02');

-- Inserción en la tabla Carta
INSERT INTO `Carta` (`IDCarta`, `Nombre`, `TipoCarta`, `FaseDeEvolucion`, `PS`, `Ataque`, `DanoDeAtaque`, `ContadorDeDano`, `Debilidad`, `Resistencia`, `HabilidadID`, `CondicionEspecialID`, `BarajaID`) VALUES
(1, 'Pikachu', 'Pokémon', 1, 60, 20, 0, 0, 0, 0, NULL, NULL, 1),
(2, 'Charmander', 'Pokémon', 1, 50, 20, 0, 0, 0, 0, NULL, NULL, 1),
(3, 'Bulbasaur', 'Pokémon', 1, 50, 20, 0, 0, 0, 0, NULL, NULL, 1),
(4, 'Mewtwo', 'Pokémon', 2, 100, 50, 0, 0, 0, 0, NULL, NULL, 2);

-- Inserción en la tabla CartaEntrenador
INSERT INTO `CartaEntrenador` (`IDCartaEntrenador`, `Tipo`, `Descripcion`) VALUES
(1, 'Entrenador', 'Carta de entrenador 1'),
(2, 'Entrenador', 'Carta de entrenador 2');

-- Inserción en la tabla CartaEnergia
INSERT INTO `CartaEnergia` (`IDCartaEnergia`, `Tipo`, `Descripcion`) VALUES
(1, 'Energía', 'Carta de energía 1'),
(2, 'Energía', 'Carta de energía 2');

-- Inserción en la tabla Habilidad
INSERT INTO `Habilidad` (`IDHabilidad`, `Nombre`, `Descripcion`, `Coste`) VALUES
(1, 'Habilidad 1', 'Descripción de la habilidad 1', 10),
(2, 'Habilidad 2', 'Descripción de la habilidad 2', 20);

-- Inserción en la tabla CondicionEspecial
INSERT INTO `CondicionEspecial` (`IDCondicionEspecial`, `Nombre`, `Descripcion`, `Duracion`, `Efecto`) VALUES
(1, 'Condición Especial 1', 'Descripción de la condición especial 1', 3, 'Efecto de la condición especial 1'),
(2, 'Condición Especial 2', 'Descripción de la condición especial 2', 5, 'Efecto de la condición especial 2');

-- Inserción en la tabla Turno
INSERT INTO `Turno` (`IDTurno`, `Jugada`, `CantidadEnergia`, `CantidadPokemon`, `CantidadHerramientas`, `OtroElemento`, `BarajaID`) VALUES
(1, 'Turno 1', 3, 2, 1, 'Otro elemento de turno 1', 1),
(2, 'Turno 2', 2, 3, 2, 'Otro elemento de turno 2', 2);
