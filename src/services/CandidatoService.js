import HttpClient from './utils/HttpClient';

class CandidatoService {
  constructor() {
    this.httpClient = new HttpClient('https://api-deujob.herokuapp.com');
  }

  getCandidatosByVagaId(id) {
    return this.httpClient.get(`/candidatos/${id}`);
  }

  getVagasByCandidatoId(id) {
    return this.httpClient.get(`/user/vagas/${id}`);
  }

  createCandidatura(candidatura) {
    return this.httpClient.post('/candidatos', candidatura);
  }

  updateCandidatura(id, vaga) {
    return this.httpClient.put(`/candidatos/${id}`, vaga);
  }
}

export default new CandidatoService();
