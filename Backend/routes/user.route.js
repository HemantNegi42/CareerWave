import express from "express";
import {
  login,
  register,
  update,
  logout,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
router.post("/register", isAuthenticated, register);
router.post("/login", isAuthenticated, login);
router.get("/logout", isAuthenticated, logout);
router.post("/profile/update/:userId", isAuthenticated, update);

export default router;