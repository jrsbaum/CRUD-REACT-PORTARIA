import Acesso from "../models/acessoModel.js";

export const getAllAcesso = async (req, res) => {
  try {
    const acesso = await Acesso.findAll();
    res.json(acesso);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAcessoById = async (req, res) => {
  try {
    const acesso = await Acesso.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(acesso[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createAcesso = async (req, res) => {
  try {
    await Acesso.create(req.body);
    res.json({
      message: "Acesso Criado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateAcesso = async (req, res) => {
  try {
    await Acesso.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Acesso Atualizado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteAcesso = async (req, res) => {
  try {
    await Acesso.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Acesso Deletado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
