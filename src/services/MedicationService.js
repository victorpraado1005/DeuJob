import HttpClient from './utils/HttpClient';

class VaccineService {
  constructor() {
    this.httpClient = new HttpClient(process.env.API_URL);
  }

  // metodo para buscar o medicamento relacionado ao animal
  listMedicationByAnimalId(animalId) {
    return this.httpClient.get(`/medication/${animalId}`);
  }

  // metodo para buscar o medicamento para alterar
  getMedicationById(id) {
    return this.httpClient.get(`/medication/${id}`);
  }

  createMedication(medication) {
    return this.httpClient.post('/medication', medication);
  }

  updateMedication(id, medication) {
    return this.httpClient.put(`/medication/${id}`, medication);
  }

  deleteMedication(id) {
    return this.httpClient.delete(`/medication/${id}`);
  }
}

export default new VaccineService();
