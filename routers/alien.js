const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async (req,res) => {
   try {
   const alienData = await Alien.find();

   res.json(alienData);

   }catch(err){
        res.send("Error: "  + err )
   }    
})

router.get('/:id', async (req,res) => {
   try {
   const alienData =await Alien.findById(req.params.id);

   res.json(alienData);

   }catch(err){
        res.send("Error: "  + err )
   }    
})

router.patch('/:id', async (req,res) => {
   try {
   const alienData =await Alien.findById(req.params.id);
    alienData.tech = req.body.tech;

    const save = await alienData.save()
   res.json(alienData);

   }catch(err){
        res.send("Error: "  + err )
   }    
})

router.delete('/:id', async (req,res) => {
   try {
   const alienData = await Alien.findById(req.params.id);
   const del = alienData.deleteOne();
   res.json(del);

   }catch(err){
        res.send("Error: "  + err )
   }    
})

router.post('/', async (req,res) => {

    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech
    })
   try {
   const alienData =await alien.save();

   res.json(alienData);

   }catch(err){
        res.send("Error: "  + err )
   }    
})

module.exports = router;