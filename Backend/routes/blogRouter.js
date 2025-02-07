import express from "express";
import {
  blogPost,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { isAuthenticated, isAuthorized } from "../middleware/authenticate.js";
const blogrouter = express.Router();

blogrouter.post("/post", isAuthenticated, isAuthorized("Author"), blogPost);

blogrouter.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Author"),
  deleteBlog
);

blogrouter.get("/all", getAllBlogs);
blogrouter.get("/singleblog/:id", isAuthenticated, getSingleBlog);
// isAuthorised middleware is used to authorise "Author"
blogrouter.get("/myblogs", isAuthenticated, isAuthorized("Author"), getMyBlogs);
blogrouter.put("/update/:id", isAuthenticated, isAuthorized("Author"), updateBlog);

export default blogrouter;