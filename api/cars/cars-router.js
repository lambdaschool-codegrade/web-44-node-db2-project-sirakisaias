// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');

router.get('/api/cars', (res, req) => {
    Cars.getAll()
    .then(cars =>{
        res.json(cars)
    })
    .catch(err =>{
        res.status(500).json({message: err.message})
    })
})

module.exports = router