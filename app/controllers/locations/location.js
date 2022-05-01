/**
 * Required External Modules
 */

const { modelName } = require('../../models/location');
const Location = require('../../models/location');
module.exports = {
    create : async (req, res) => {
        const data = new Location({
            name: req.body.name,
            description: req.body.description
        });

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    },
    getAll : async (req, res) => {
        try {
            const data = await Location.find();
            res.json(data);
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    },
    getOne : async (req, res) => {
        try {
            const data = await Location.findById(req.params.id);
            res.json(data);
        }
        catch(error) {
            res.status(500).json({message: error.message})
        }
    },
    update : async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = {new: true};

            const result = await Location.findByIdAndUpdate(
                id, updatedData, options
            )

            res.send(result)
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    },
    delete : async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Location.findByIdAndDelete(id);
            res.send(`Document with ${data.name} has been deleted`);
        }
        catch(error) {
            res.status(400).json({message: error.message})
        }
    },
    getAssets: async (req, res) =>
    {
        const id = req.params.id;
        const foundAssets = await Location.findById(id).populate('assets');
        res.json(foundAssets)
    }
};