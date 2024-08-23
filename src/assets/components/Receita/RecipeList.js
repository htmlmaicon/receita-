import React from 'react';
import { Link } from 'react-router-dom';
import recipes from '../Receitas.json';
import '../Receita/style.css'

function RecipeList() {
  return (
    <div className='receitas'>
      <h1>Receitas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;