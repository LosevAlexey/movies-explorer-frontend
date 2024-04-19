import { MOVIES_API_URL } from "./constants";

class MoviesApi  {
    constructor(){
        this.url = MOVIES_API_URL;
        this._headers = {
            "Content-type": "application/json",
        };
    }

    _handleResponse(res) {
        return res.ok ? res.json() : Promise.reject("Ошибка - " + res.message);
    }

    async getMovies() {
        const res = await fetch(`${this.url}/beatfilm-movies`, {
            headers: this._headers,
        });
        return this._handleResponse(res);
    }
}

export const moviesApi = new MoviesApi()
