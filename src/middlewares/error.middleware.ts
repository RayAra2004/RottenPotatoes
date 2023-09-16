import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "@/protocols/error.protocol";

export default function errorHandlingMiddleware(
        error: ApplicationError, 
        req: Request, 
        res: Response, 
        next: NextFunction
    ){
    switch(error.code){
        case "23505":
            return res.status(httpStatus.CONFLICT).send("Informação já existente");
        case "23503":
            return res.status(httpStatus.NOT_FOUND).send(error.detail);
    }
    switch(error.name){
        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        case "conflict":
            return res.status(httpStatus.CONFLICT).send(error.message);
        case "unprocessable":
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
        case "badRequest":
            return res.status(httpStatus.BAD_REQUEST).send(error.message);
        case "internalServerError":
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
        default:
            console.log(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor!!");
    }
}