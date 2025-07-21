import express from "express";
import { prismaclient } from "@repo/database/db";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  await prismaclient.user
    .findMany()
    .then((users: any) => {
      res.json(users);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/user", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  await prismaclient.user
    .create({
      data: {
        username,
        password,
      },
    })
    .then((user: any) => {
      res.status(201).json(user);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
