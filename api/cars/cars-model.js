const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first()
}

async function create ({vin, make, model, mileage, title, transmission}) {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert({ vin, make, model,  mileage, title, transmission }) // [67] the id of the new rec
  const newCars = await getById(id)
  return newCars
}

module.exports = {getAll, getById, create}
