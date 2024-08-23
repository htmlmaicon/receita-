import React, { useState } from 'react';
import AdicionarReceita from './RecipeForm';
import './style.css'; 

const ListaReceitas = () => {
    const [receitas, setReceitas] = useState([
        
    ]);

    const adicionarReceita = (receita) => {
        setReceitas([...receitas, receita]);
    };

    return (
        <div className="lista-receitas-container">
            <AdicionarReceita adicionarReceita={adicionarReceita} />
            <ul className="lista-receitas">
                {receitas.map((receita) => (
                    <li key={receita.id}>
                        <h2>{receita.nome}</h2>
                        <p>{receita.categoria}</p>
                        <img src={receita.image} alt={receita.nome} />
                        <p>{receita.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaReceitas;
