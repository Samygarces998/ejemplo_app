const Persona = require("../models/persona");

// Crear nueva persona
exports.createPerson = (req, res) => {
    const names = req.body.names;
    const email = req.body.email;
    const phone = req.body.phone;
    const nuevaPersona = new Persona({
        names: names,
        email: email,
        phone: phone
    });
    nuevaPersona.save()
        .then(() => console.log("Usuario creado"))
        .catch((err) => console.error(err));

    res.redirect("/");
}

// Obtenre todos las peresonas
exports.findAll = async (_req, res) => {
    const people = await Persona.find({});
    console.log({people});
    res.json(people);
}
