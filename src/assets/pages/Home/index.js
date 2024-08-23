import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeList from '../../components/Receita/RecipeList.js';

function Home() {
    return (
        <div>
            <Header/>
            <RecipeList />
            <Footer/>
        </div>
    );
}

export default Home;
