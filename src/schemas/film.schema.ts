import { Film } from "@/protocols/film.protocol";
import joi from "joi";
import joiDate from "@joi/date";

const joiToDate = joi.extend(joiDate);

export const filmSchema = joi.object<Film>({
    name: joi.string().required(),
    premiereDate: joiToDate.date().format("DD-MM-YYYY").required(),
    description: joi.string().min(50).required(),
    nota: joi.number().integer().required()
})