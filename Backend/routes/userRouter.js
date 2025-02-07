import express from "express";
// importing all function from useController.js and authenticate.js
import {
  getAllAuthors,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { isAuthenticated, isAuthorized } from "../middleware/authenticate.js";

// sytax to create router
const router = express.Router();

// setting routes for each actions
router.post("/register", register);
router.post("/login", login);
//  The 'isAuthenticated' middleware ensures that only authenticated users can access the logout route.
router.get("/logout", isAuthenticated, logout);
router.get("/myprofile", isAuthenticated, getMyProfile);
router.get("/authors", getAllAuthors);

export default router;