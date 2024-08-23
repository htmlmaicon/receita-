import React, { useState } from 'react';
import './Recipe.css';

const AdicionarReceita = ({ adicionarReceita }) => {
    const [novaReceita, setNovaReceita] = useState({
        id: '',
        nome: '',
        categoria: '',
        image: '',
        descricao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovaReceita({
            ...novaReceita,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarReceita(novaReceita);
        setNovaReceita({
            id: '',
            nome: '',
            categoria: '',
            image: '',
            descricao: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text" 
                name="id" 
                value={novaReceita.id} 
                onChange={handleChange} 
                placeholder="ID" 
                required 
                className="form-input"
            />
            <input 
                type="text" 
                name="nome" 
                value={novaReceita.nome} 
                onChange={handleChange} 
                placeholder="Nome da Receita" 
                required 
                className="form-input"
            />
            <input 
                type="text" 
                name="categoria" 
                value={novaReceita.categoria} 
                onChange={handleChange} 
                placeholder="Categoria" 
                required 
                className="form-input"
            />
            <input 
                type="text" 
                name="image" 
                value={novaReceita.image} 
                onChange={handleChange} 
                placeholder="URL da Imagem" 
                required 
                className="form-input"
            />
            <textarea 
                name="descricao" 
                value={novaReceita.descricao} 
                onChange={handleChange} 
                placeholder="Descrição" 
                required 
                className="form-input"
            ></textarea>
            <button type="submit" className="form-button">Adicionar Receita</button>
        </form>
    );
};

export default AdicionarReceita;
