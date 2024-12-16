import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";
import { Database } from "./database.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (req, res) => {
      return res.end("Listagem de usuários");
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description, created_at, updated_at } = req.body;

      const task = {
        id: randomUUID,
        title,
        description,
        completed_at: null,
        created_at,
        updated_at,
      };

      database.insert("tasks", task);
    },
  },
  {
    method: "PATCH",
    path: "/tasks",
    handler: (req, res) => {
      return res.end("Edição única de usuários");
    },
  },
  {
    method: "PUT",
    path: "/tasks",
    handler: (req, res) => {
      return res.end("Edição total de usuários");
    },
  },
  {
    method: "DELETE",
    path: "/tasks",
    handler: (req, res) => {
      return res.end("Deleção de usuários");
    },
  },
];
