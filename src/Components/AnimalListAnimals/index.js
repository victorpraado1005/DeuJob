import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
  Container, TitleContainer, GridArea, Card,
} from './style';

import Button from '../../button';
import AnimalsService from '../../services/AnimalsService';

export default function Animal() {
  const UserID = localStorage.getItem('UserID');
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const AnimalsList = await AnimalsService.listAnimals(UserID);

        setAnimals(AnimalsList);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h1>Meus Animais:</h1>
        <Button>
          <Link to="/addAnimal">
            + Adicionar
          </Link>
        </Button>
      </TitleContainer>
      <GridArea>
        {animals.map((animal) => (
          <Card key={animal.id}>
            <div className="animal-name">
              <strong>{animal.name}</strong>
            </div>
            <div className="section-info">
              <div className="animal-info">
                <span>
                  Espécie:
                  {' '}
                  {animal.species}
                </span>
                <span>
                  Raça:
                  {' '}
                  {animal.breed}
                </span>
                <span>
                  Sexo:
                  {' '}
                  {animal.gender}
                </span>
              </div>

              <div className="button-details">
                <Button type="button">
                  <Link to={`/editAnimal/${animal.id}`}>
                    Vacinas
                  </Link>
                </Button>
                <Button type="button">
                  <Link to={`/editAnimal/${animal.id}`}>
                    Medicamentos
                  </Link>
                </Button>
                <Button type="button" className="btn-edit">
                  <Link to={`/editAnimal/${animal.id}`}>
                    Editar
                  </Link>
                </Button>
                <Button type="button">
                  <Link to={`/editAnimal/${animal.id}`}>
                    Remover
                  </Link>
                </Button>
              </div>
            </div>

          </Card>
        ))}
      </GridArea>
    </Container>
  );
}
