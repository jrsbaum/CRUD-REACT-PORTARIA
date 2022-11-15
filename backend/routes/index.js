import express from "express";

import {
  getAllAcesso,
  createAcesso,
  getAcessoById,
  updateAcesso,
  deleteAcesso,
} from "../controllers/Acesso.js";

const router = express.Router();

router.get("/", getAllAcesso);
router.get("/:id", createAcesso);
router.post("/", getAcessoById);
router.patch("/:id", updateAcesso);
router.delete("/:id", deleteAcesso);

export default router;
