import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../redux/actions.js';
import Card from '../components/Card.jsx';
import NavBar from '../components/NavBar.jsx';

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <h1>Soy Home/home</h1>
            <div>
                {allRecipes?.map((r,i) => {
                    return (
                        <div key={i}>
                            <Card
                            key={r.id}
                            image={r.image}
                            name={r.name}
                            diets={r.diets} 
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};