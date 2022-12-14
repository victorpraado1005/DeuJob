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

  VerficiarCandidatura(vagaId, userId) {
    return this.httpClient.get(`/candidatura/${vagaId}/${userId}`);
  }

  createCandidatura(candidatura) {
    return this.httpClient.post('/candidatos', candidatura);
  }

  updateCandidatura(id, vaga) {
    return this.httpClient.put(`/candidatos/${id}`, vaga);
  }

  deleteCandidaturasByVagaId(vagaId) {
    return this.httpClient.delete(`/candidatos/${vagaId}`);
  }

  deleteById(id) {
    return this.httpClient.delete(`/candidatura/${id}`);
  }
}

export default new CandidatoService();
