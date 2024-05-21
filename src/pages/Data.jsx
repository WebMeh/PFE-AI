// Data.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Data = () => {
    const location = useLocation();
    const { objectives } = location.state;

    return (
        <div>
            <h1>Objectifs</h1>
            <ul>
                {objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default Data;