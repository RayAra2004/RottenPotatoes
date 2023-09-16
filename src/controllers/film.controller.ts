import { Film } from "@/protocols/film.protocol";
import { filmService } from "@/services/film.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
    
    await filmService.create(req.body);

    res.status(httpStatus.CREATED).send("Filme criado!");
};

async function edit(req: Request, res: Response) {
    const {id} = req.params;
    await filmService.edit({id: Number(id), description: req.body.description});

    res.status(httpStatus.OK).send("Filme editado!");
};

async function deleteFilm(req: Request, res: Response) {
    const {id} = req.params;
    await filmService.deleteFilm({id: Number(id)});

    res.status(httpStatus.OK).send("Filme excluído!");
};


export const filmController = {
    create, edit, deleteFilm
};