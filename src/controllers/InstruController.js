const Instru = require("../models/Instru");

const getAll = async (req, res) => {
  try {
    const Instrumento = await Instru.findAll();
    res.render("index", { Instrumento, instruPut: null, instruDel: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const add = async (req, res) => {
  try {
    const Instrumento = req.body;
    if (!Instrumento) {
      return res.redirect("/cadastro");
    }
    await Instru.create(Instrumento);

    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const Instrumento = await Instru.findAll();
    const instru = await Instru.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        Instrumento,
        instruPut: instru,
        instruDel: null,
      });
    } else {
      res.render("index", {
        Instrumento,
        instruPut: null,
        instruDel: instru,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {

  try {
    const Instrumento = req.body;
    await Instru.update(Instrumento, {where: {id: req.params.id}});
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }

};

const remove = async (req, res) => {

  try {
    
    await Instru.destroy( {where:{id: req.params.id}});
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }

};

module.exports = {
  getAll,
  cadastro,
  add,
  getById,
  update,
  remove,
};
