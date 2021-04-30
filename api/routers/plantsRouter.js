const express = require("express")
const { 
   getPlants,
   addPlant, 
   deletePlant,
   updatePlant,
   findById    } = require("../models/plants")

const { restrict } = require('../middleware/restricted')

const router = express.Router()

router.get("/", restrict, async (req, res, next) => {
   console.log("called")
	try {
		const plantsFromDB = await getPlants()

		res.json(plantsFromDB)
	} catch(err) {
		next(err)
	}
})

router.post("/", restrict, async (req,res,next)=> {

   try{
      const returnedPlant = await addPlant(req.body)
      res.json(returnedPlant)
   }catch(err){
      next(err)
   }
})

router.put("/plants/:id", restrict, async (req,res,next)=> {

   const { id } = req.params;
   const updated = req.body;
 
   try{
      const [plantToUpdate] = await findById(id)

      if(!plantToUpdate){
         return res.status(404).json({ message: "Could not find plant with given id" });
      }

      const editedPlant = await updatePlant( updated, plantToUpdate.id )
      res.status(200).json(editedPlant)

   }catch(err){
      next(err)
   }

})

router.delete("/plants/:id", restrict, async (req,res,next)=> {

   const { id } = req.params;
 
   try{
      const [plantToDelete] = await findById(id)

      if(!plantToDelete){
         return res.status(404).json({ message: "Could not find plant with given id" });
      }
      const deletedPlant = await deletePlant( plantToDelete.id )
      res.status(200).json(deletedPlant)

   }catch(err){
      next(err)
   }

})

module.exports = router