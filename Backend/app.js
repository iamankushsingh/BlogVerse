import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./Database/dbConnection.js";
import { errorMiddleware } from "./middleware/error.js";
import router from "./routes/userRouter.js";
import blogrouter from "./routes/blogRouter.js";
import fileUpload from "express-fileupload";

const app=express();
// to load environment variable from config.env
dotenv.config({path: "./config/config.env"});
// to have frontend connection
app.use(
    cors(
        {
            origin:[process.env.FRONTEND_URL],
            method:["post","get","put","delete"],
            credentials:true,
        }
    )
);

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({extended:true}));

// syntax for server support for any file upload
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

// any request made on this route will be handled by userRouter function
app.use("/api/v1/user", router);
app.use("/api/v1/blog", blogrouter);

// to check database connection by importing database connecting function
dbConnection();


app.use(errorMiddleware);
export default app;

