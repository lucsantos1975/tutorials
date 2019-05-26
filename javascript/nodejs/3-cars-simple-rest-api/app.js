/*
file: 3-cars-simple-rest-api/app.js
install library: npm i express
run in console: node app
do requests with Postman: 
    GET http://localhost:3000/
    GET http://localhost:3000/api/cars
    GET http://localhost:3000/api/cars/4
    GET http://localhost:3000/api/cars/19
    POST http://localhost:3000/api/cars 
        body: {"brand": "Mitsubishi"}
    POST http://localhost:3000/api/cars 
        body: {"brand": "Mitsubishi", "model": "Pajero"}
    PUT http://localhost:3000/api/cars/7 
        body: {"model": "Pajero Full"}
    PUT http://localhost:3000/api/cars/7 
        body: {"brand": "Mitsubishi", "model": "Pajero Full"}
    DELETE http://localhost:3000/api/cars/2
*/

const express = require("express");
const app = express();

app.use(express.json());

const cars = [
    {id: 1, brand: "GM", model: "Corsa"},
    {id: 2, brand: "GM", model: "Cruze"},
    {id: 3, brand: "Ford", model: "Ranger"},
    {id: 4, brand: "Ford", model: "Focus"},
    {id: 5, brand: "Fiat", model: "500"},
    {id: 6, brand: "Nissan", model: "March"}
];

app.get("/", (req, res) => {
    res.send("Index of the cars API");
});

app.get("/api/cars", (req, res) => {
    res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
    const car = findCar(parseInt(req.params.id));
    
    if (car.error) {
        return res.status(404).send(car);
    }

    res.send(car);
});

app.post("/api/cars", (req, res) => {
    const validation = validateCar(req.body);
    if (validation.error) {
        return res.status(400).send(validation);
    }

    const car = {
        id: cars.length + 1,
        brand: req.body.brand,
        model: req.body.model
    };
    cars.push(car);
    res.send(car);
});

app.put("/api/cars/:id", (req, res) => {
    const car = findCar(parseInt(req.params.id));

    if (car.error) {
        return res.status(404).send(car);
    }

    const validation = validateCar(req.body);
    if (validation.error) {
        return res.status(400).send(validation);
    }

    car.brand = req.body.brand;
    car.model = req.body.model;

    res.send(car);
});

app.delete("/api/cars/:id", (req, res) => {
    const car = findCar(parseInt(req.params.id));

    if (car.error) {
        return res.status(404).send(car);
    }

    const index = cars.indexOf(car);
    cars.splice(index, 1);

    res.send(car);
});

function findCar(id) {
    const car = cars.find(c => c.id === id);
    
    if (!car) {
        return {"error": true, "message": `Not found: car.id = ${id}`};
    }

    return car
}

function validateCar(car) {
    if (!car.brand) {
        return {"error": true, "message": "Required value: brand"};
    }

    if (!car.model) {
        return {"error": true, "message": "Required value: model"};
    }

    return {"error": false};
}

app.listen(3000, () => console.log("API running on port 3000..."));
