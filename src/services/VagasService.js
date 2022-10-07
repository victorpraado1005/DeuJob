import HttpClient from './utils/HttpClient';

class VagasService {
  constructor() {
    this.httpClient = new HttpClient('https://api-deujob.herokuapp.com');
  }

  getVagas() {
    return this.httpClient.get('/vagas');
  }

  getVagasById(id) {
    return this.httpClient.get(`/vagas/${id}`);
  }

  createVaga(vaga) {
    return this.httpClient.post('/vagas', vaga);
  }

  updateVaga(id, vaga) {
    return this.httpClient.put(`/vagas/${id}`, vaga);
  }
}

export default new VagasService();
