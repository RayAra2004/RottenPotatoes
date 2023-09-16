export type FilmDB = {
    id: number;
    name: string;
	premiereDate: Date | string;
	description: string;
	nota: number;
	numberVotes: number;
}

export type Film =  Omit<FilmDB, "id" | "numberVotes">