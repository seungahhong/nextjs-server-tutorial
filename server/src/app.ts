import express, { Request, Response, NextFunction } from "express";
import { getAllPostsData, getPostData } from "./lib/posts";
import cors from "cors";

const app = express();
app.use(cors());
app.get(
  "/getAllPostData",
  (req: Request, res: Response, next: NextFunction) => {
    res.send(getAllPostsData());
  }
);
app.get(
  "/getPostData/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(await getPostData(req.params.id));
  }
);

const port = "8000";
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
