import {makeAutoObservable} from 'mobx';
import axios from "axios";


class StarWarsStore {
    starWarsData: [] = []
    status: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    fetchUsers(url: string) {
        this.status = 'Загрузка...'
        this.starWarsData = []

        axios.get(url)
            .finally(() => this.status = '')
            .then(
                (response) => {
                    this.starWarsData = response.data.results
                },
                error => this.status = `Ошибка: ${error}`
            )
    }

}

export default new StarWarsStore();