import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/hello", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

app.listen(port, (): void => {
  console.log(`books-stock:port:${port}`);
});
