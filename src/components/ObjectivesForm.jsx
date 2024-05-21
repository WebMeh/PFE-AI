// ObjectivesForm.jsx
import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ObjectivesForm = () => {
    const [objectives, setObjectives] = useState(['']);
    const navigate = useNavigate();

    const handleAddObjective = () => {
        setObjectives([...objectives, '']);
    };

    const handleObjectiveChange = (index, value) => {
        const updatedObjectives = [...objectives];
        updatedObjectives[index] = value;
        setObjectives(updatedObjectives);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Data', { state: { objectives } });
    };

    return (
        <Form onSubmit={handleSubmit}>
            {objectives.map((objective, index) => (
                <InputGroup key={index} className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder={`Objectif ${index + 1}`}
                        value={objective}
                        onChange={(e) => handleObjectiveChange(index, e.target.value)}
                    />
                </InputGroup>
            ))}
            <Button variant="primary" onClick={handleAddObjective}>
                Ajouter un objectif
            </Button>
            <Button variant="primary" type="submit">
                Soumettre
            </Button>
        </Form>
    );
};

export default ObjectivesForm;