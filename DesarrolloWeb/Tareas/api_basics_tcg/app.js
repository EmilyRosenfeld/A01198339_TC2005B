// EMILY ROSENFELD, A01198339
// Actividad en clase: API básico para cartas

"use strict";

import express from 'express';

const app = express() //crear un servidor de express, solamente la instancia

const port = 3000

app.use(express.json()) //app.use es para configurar cosas, express.json es para habilitar los jsons en mi servidor

let cartas = []

// Todas las cartas
app.get('/api/cards',(req,respt)=>{
    if (cartas.length === 0){
    return respt.status(500).json({"message": "Cartas vacias"})
    }
    respt.status(200).json(cartas)
})

// Carta con ID
app.get('/api/cards/:id', (req, respt) => {
    const id = req.params.id;
    const carta = cartas.find(carta => carta.id === id);

    if (!carta) {
        return respt.status(404).json({"message": "Carta no encontrada."})
    }

    respt.status(200).json(carta)
})

app.post('/api/cards',(req,respt)=>{
    console.log(cartas)

    const newCarta = req.body;
    if (!newCarta.id || !newCarta.type || !newCarta.name){
        return respt.status(500).json({"message": "Verifica tus atributos"})  //Si el cliente no manda los atributos es error
    } 
    const cartaRepetida = cartas.filter(carta => carta.id === newCarta.id) //arrow function
    if (cartaRepetida.length > 0 ){
        return respt.status(500).json({"message": "Valores Repetidos"}) 

    }
    cartas.push(newCarta)
    respt.status(200).json({"message": "Agregado correctamente"}) 
    console.log(cartas)
})

app.put('/api/cards/:id',(req,respt)=>{
    const id = req.params.id;

    const cartaExiste = cartas.filter(carta => carta.id === id) //validando si existe una carta con el id
    if (cartaExiste.length === 0){
        return respt.status(404).json({"message": "No encontrado"}) 
    }
    let cartaAct = req.body;
    cartaAct = {
        id,
        ...cartaAct //... agarra una copia del objeto y lo pega ahi, y le estamos agregando el id
    }
    cartas = cartas.map(carta => carta.id !== id ? carta : cartaAct)
    respt.status(200).json({"message": "Update correctamente"})
})

app.delete('/api/cards/:id',(req,respt)=>{
    const id = req.params.id;
    const cartaI = cartas.findIndex(carta => carta.id === id);

    if (cartaI === -1) {
        return respt.status(404).json({"message": "Carta no encontrada."})
    }

    cartas.splice(cartaI, 1);
    respt.status(200).json({"message": "Carta eliminada correctamente."})
})

app.listen(port, () =>{
    console.log(`listeing on port ${port}`)
})