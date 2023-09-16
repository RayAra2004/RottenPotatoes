import { connection } from "@/database/connection.database";
import { Film } from "@/protocols/film.protocol";

async function create(film: Film) {

    console.log(film)
    await connection.query(`INSERT INTO filme(name, "premiereDate", description, nota) VALUES($1, $2, $3, $4);
    `, [film.name, film.premiereDate, film.description, film.nota])
};


export const filmRepository = {
    create
};