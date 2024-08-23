import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../Receitas.json';
import Voltar from '../BotaoVoltar/Voltar.js';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Receita não encontrada!</h2>;
  }

  let ingredientes = [];
  let modoPreparo = [];
  
  const ingredientesMatch = recipe.descricao.match(/Ingredientes:\s*([\s\S]*?)\s*Modo de preparo/i);
  const modoPreparoMatch = recipe.descricao.match(/Modo de preparo\s*:\s*(?:\d+min\s*)?([\s\S]*)/i);

  if (ingredientesMatch && ingredientesMatch[1]) {
    ingredientes = ingredientesMatch[1].trim().split('\n').map(ing => ing.trim());
  }

  if (modoPreparoMatch && modoPreparoMatch[1]) {
    modoPreparo = modoPreparoMatch[1].trim().split('\n').map(step => step.trim());
  }

  return (
    <div>
      <Voltar/>
      <h1>{recipe.nome}</h1>
      <p><strong>Categoria:</strong> {recipe.categoria}</p>
      <img src={recipe.image} alt={recipe.nome} style={{ width: '300px', height: 'auto' }} />
      
      {ingredientes.length > 0 && (
        <>
          <h3>Ingredientes:</h3>
          <ul>
            {ingredientes.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}

      {modoPreparo.length > 0 && (
        <>
          <h3>Modo de Preparo:</h3>
          <ol>
            {modoPreparo.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;