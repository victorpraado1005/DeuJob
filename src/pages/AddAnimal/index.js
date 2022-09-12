import { useRef } from 'react';

import { Container } from './style';

import AnimalsService from '../../services/AnimalsService';

import history from '../../history';

import Header from '../../Components/Header';
import AnimalForm from '../../Components/AnimalForm';
import Footer from '../../Components/Footer';

export default function AddAnimal() {
  const animalFormsRef = useRef(null);
  async function handleSubmit(formData) {
    const userId = localStorage.getItem('UserID');

    try {
      const animal = {
        name: formData.name,
        breed: formData.breed,
        gender: formData.gender,
        weight_animal: formData.weight,
        lenght_animal: formData.lenght,
        species: formData.species,
        nickname: formData.nickName,
        users_id: userId,
      };
      await AnimalsService.createAnimal(animal);

      animalFormsRef.current.resetFields();

      history.push('/home');
    } catch {
      alert('Ocorreu um erro ao cadastrar o animal');
    }
  }

  return (
    <Container>
      <Header />
      <AnimalForm
        ref={animalFormsRef}
        titleLabel="Criar Animal"
        buttonLabel="Criar Animal"
        onSubmit={handleSubmit}
      />
      <Footer />
    </Container>
  );
}
