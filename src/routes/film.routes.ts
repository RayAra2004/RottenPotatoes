import { filmController } from "@/controllers/film.controller";
import validateSchema from "@/middlewares/validateSchema.middleware";
import { filmSchema } from "@/schemas/film.schema";
import { Router } from "express";

const filmRouter = Router();

filmRouter.post("/filme", validateSchema(filmSchema), filmController.create)

export default filmRouter;