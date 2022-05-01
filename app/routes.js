const express = require("express");
const router = new express.Router();
const Location = require("./controllers/locations/location");
const Asset = require("./controllers/asset/asset");
router.get("/", (req, res) => res.send("ok"));

router.post("/locations", Location.create);
router.get("/locations", Location.getAll);
router.get("/locations/:id", Location.getOne);
router.patch("/locations/:id", Location.update);
router.delete("/locations/:id", Location.delete);
router.get("/locations/:id/assets", Location.getAssets);

router.post("/assets", Asset.create);
router.get("/assets", Asset.getAll);

module.exports = router;