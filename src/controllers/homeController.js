const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  const user = req.user; // Replace this with how you access the user object in your application
  res.render("index", { contatos, user });
};
