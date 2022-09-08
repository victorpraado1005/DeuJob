import HttpClient from './utils/HttpClient';

class AnimalsService {
  constructor() {
    this.httpClient = new HttpClient('https://api-petverso.herokuapp.com');
  }

  listAnimals(UserID) {
    return this.httpClient.get(`/users/animals/${UserID}`);
  }

  getAnimalById(id) {
    return this.httpClient.get(`/animals/${id}`);
  }

  createAnimal(animal) {
    return this.httpClient.post('/animals', animal);
  }

  updateAnimal(id, animal) {
    return this.httpClient.put(`/animals/${id}`, animal);
  }
}

export default new AnimalsService();
