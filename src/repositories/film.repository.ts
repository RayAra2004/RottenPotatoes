import { connection } from "@/database/connection.database";
import { Film } from "@/protocols/film.protocol";

async function create(film: Film) {

    console.log(film)
    await connection.query(`INSERT INTO filme(name, "premiereDate", description, nota) VALUES($1, $2, $3, $4);
    `, [film.name, film.premiereDate, film.description, film.nota])
};

async function edit(film : {id: number, description: string}): Promise<any> {
    return await connection.query(`UPDATE filme SET description = $2 WHERE id = $1;
    `, [film.id, film.description])
};

async function deleteFilm(film : {id: number}): Promise<any> {
    return await connection.query(`DELETE FROM filme WHERE id = $1;
    `, [film.id])
};


export const filmRepository = {
    create, edit, deleteFilm
};