export interface RespuestaMDB {
    page:          number;
    results:       Peliculas[];
    total_pages:   number;
    total_results: number;
}

export interface Peliculas {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
    Pl = "pl",
}