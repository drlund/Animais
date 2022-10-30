import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
    adicional,
    dieta,
    nome,
    nomeCientifico,
    mostrarDadoAdicional,
    tamanho,
})
{
    return(
        <div className= 'animal-wrapper'>
            <h2>{nome}</h2>
            <h3>{nomeCientifico}</h3>
            <h4>{tamanho}kg</h4>
            <div>{dieta.join(', ')}.</div>
            <button onClick={() => mostrarDadoAdicional(adicional)}>Mais info...</button>
        </div>
        );
    }

    AnimalCard.propTypes = {
    adicional: PropTypes.shape({
        link: PropTypes.string,
        nota: PropTypes.string,
    }),
    dieta: PropTypes.arrayOf(PropTypes.string).isRequired,
    nome: PropTypes.string.isRequired,
    nomeCientifico: PropTypes.string.isRequired,
    mostrarDadoAdicional: PropTypes.func.isRequired,
    tamanho: PropTypes.number.isRequired
    }
    
    AnimalCard.defaultProps = {
    adicional: {
        nota: 'Sem informação adicional!'
        }
    }
