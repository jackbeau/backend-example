/**
 * Required External Modules
 */

 const Asset = require('../../models/asset');
 const Location = require('../../models/location');

 module.exports = {
     create : async (req, res) => {
         const data = new Asset({
             name: req.body.name,
             id: req.body.id,
             location: req.body.location
         });
 
         try {
             const dataToSave = await data.save();
             await Location.updateOne({_id: req.body.location}, {$push: {assets: data}});
             res.status(200).json(dataToSave);
         }
         catch(error) {
             res.status(400).json({message: error.message})
         }
     },
     getAll : async (req, res) => {
         try {
             const data = await Asset.find();
             res.json(data);
         }
         catch(error) {
             res.status(400).json({message: error.message})
         }
     }
 };