import { convertDate1 } from "@/Utils/date.utils";
import { Film } from "@/protocols/film.protocol";
import { filmRepository } from "@/repositories/film.repository";

async function create(film : Film) {
    const date = convertDate1(String(film.premiereDate))
    await filmRepository.create({...film, premiereDate: date});
};


export const filmService = {
    create
};