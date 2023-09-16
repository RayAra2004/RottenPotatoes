import { Film } from "@/protocols/film.protocol";
import { filmService } from "@/services/film.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
    
    await filmService.create(req.body);

    res.status(httpStatus.CREATED).send();
};


export const filmController = {
    create
};