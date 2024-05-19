import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const AnswerPage = () => {
    // Exemple de données de réponses avec les icônes des utilisateurs
    const answers = [
        { user: 'Karim El fatihi', text: 'Voici ma réponse à la question.', icon: <FaUser /> },
        { user: 'Saida Boubakar', text: 'Je partage mon point de vue sur ce sujet.', icon: <FaUser /> },
        { user: 'Ilyas Moutawkil', text: 'Ma réponse à la question posée.', icon: <FaUser /> },
    ];
    const today = new Date();
    const dateString = today.toLocaleDateString();
    return (
        <Container className="my-5">
            <Card className="mb-3">
                <Alert variant="success">
                    <Alert.Heading><span style={{ color: '#0e213d', fontWeight: 'bold' }}>Question:</span> Comment utiliser les Hooks de React?</Alert.Heading>
                    <p>
                        Je débute avec les Hooks de React et j'ai du mal à comprendre comment les utiliser efficacement. Quelqu'un pourrait-il fournir un exemple simple?
                    </p>
                    <hr />
                    <p className="mb-0">
                        Question posé par : <FaUser /> <i>user user</i>, le {dateString}
                    </p>
                </Alert>

            </Card>
            <Button className='my-3 w-50 p-2' style={{ backgroundColor: '#c864c5', borderColor: '#c864c5' }}>
                <span style={{ fontWeight: 'bolder' }}>Réponses</span> <Badge bg="secondary">{answers.length} personnes ont répondu à cette question </Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Accordion defaultActiveKey="1">
                {answers.map((answer, index) => (
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header style={{ color: '#c864c5' }}>  <FaUser className='mx-3 fs-3' /> {answer.user}</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

        </Container>
    );
};

export default AnswerPage;