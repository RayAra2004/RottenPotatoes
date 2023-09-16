import { Router } from "express";
import filmRouter from "@/routes/film.routes";

const router = Router();

router.use(filmRouter);

export default router;