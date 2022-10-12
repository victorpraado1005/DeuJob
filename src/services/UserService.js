import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://api-deujob.herokuapp.com');
  }

  getUserById(id) {
    return this.httpClient.get(`/users/${id}`);
  }

  createUser(user) {
    return this.httpClient.post('/users', user);
  }

  updateUser(id, user) {
    return this.httpClient.put(`/users/${id}`, user);
  }

  updatePontosUser(id, pontos) {
    return this.httpClient.put(`/users/pontos/${id}`, pontos);
  }
}

export default new UserService();
