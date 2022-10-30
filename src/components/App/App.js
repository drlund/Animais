import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';
import data from './data';

function mostrarDadoAdicional(adicional){
  const informacaoDeAlerta = Object.entries(adicional)
        .map(informacao => `${informacao[0]}: ${informacao[1]}`)
        .join('\n');

        alert(informacaoDeAlerta)
};

function App() {
  return(
    <div className="wrapper">
      <h1>Animais</h1>
      {data.map(animal => (
        <AnimalCard 
          key={animal.nome}
          nome={animal.nome}
          adicional={animal.adicional}
          dieta={animal.dieta}
          nomeCientifico={animal.nomeCientifico}
          mostrarDadoAdicional={mostrarDadoAdicional}
          tamanho={animal.tamanho}
          />
      ))}
    </div>
  )
}

export default App;
