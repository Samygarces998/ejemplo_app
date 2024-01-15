const express = require ("express");
const PersonCtrl= require ("../controllers/persona");

const router = express.Router();

router.get("/", (_req, res, _next) => {
    res.render("index");
});

router.get("/all", PersonCtrl.findAll);
router.post("/create", PersonCtrl.createPerson);

module.exports = router;