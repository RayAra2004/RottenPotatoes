import { filmController } from "@/controllers/film.controller";
import validateSchema from "@/middlewares/validateSchema.middleware";
import { editFilm, filmSchema } from "@/schemas/film.schema";
import { Router } from "express";

const filmRouter = Router();

filmRouter.post("/filme", validateSchema(filmSchema), filmController.create)
filmRouter.put("/filme/:id", validateSchema(editFilm), filmController.edit)
filmRouter.delete("/filme/:id", filmController.deleteFilm)
filmRouter.get("/filmes", filmController.get)

export default filmRouter;