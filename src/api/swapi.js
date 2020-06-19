export default class StarWarsApi {
    _apiBase = 'https://swapi.dev/api';

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }
        const data = await res.json();
        return data;
    }

    async getAllPeople() {
        const res = await this.getData(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getData(`/people/${id}/`)
    }

    async getAllPlanet() {
        const res = await this.getData(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getData(`/planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getData(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getData(`/starships/${id}/`)
    }
}
