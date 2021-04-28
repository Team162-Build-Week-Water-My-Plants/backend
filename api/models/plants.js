const db = require("../../data/db-config.js")

async function getPlants(){
   return db("plants")
}

async function addPlant(newPlant) {
   console.log(newPlant)
	const [id] = await db("plants").insert(newPlant,"id")
	return findById(id)
}

async function updatePlant(plant, id) {

   let updated = await db("plants").update(plant).where("id", id)
   if(updated){
      updated = findById(id)
   }
   return updated
}

async function deletePlant(id) {
   return await db("plants").where("id",id).del()
}

function findById(id){
   return db("plants")
   .where("id",id)
   .select("id","nickname","species","h2o_frequency")
}


module.exports = {
   getPlants,
   addPlant,
   findById,
   updatePlant,
   deletePlant
}