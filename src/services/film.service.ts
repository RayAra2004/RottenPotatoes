import { convertDate1 } from "@/Utils/date.utils";
import { errors } from "@/errors/errors.erros";
import { Film } from "@/protocols/film.protocol";
import { filmRepository } from "@/repositories/film.repository";

async function create(film : Film) {
    const date = convertDate1(String(film.premiereDate))
    await filmRepository.create({...film, premiereDate: date});
};

async function edit(film : {id: number, description: string}) {
    const exist = await filmRepository.edit(film);
    if(exist.rowCount !== 1) throw errors.notFound("Filme");
};

async function deleteFilm(film : {id: number}) {
    const exist = await filmRepository.deleteFilm(film);
    if(exist.rowCount !== 1) throw errors.notFound("Filme");
};

async function get(){
    return await filmRepository.get();
}

export const filmService = {
    create, get,
    edit, deleteFilm
};