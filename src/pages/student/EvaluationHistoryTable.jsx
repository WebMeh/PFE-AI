import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

const EvaluationHistoryTable = () => {
    const historyData = [
        {
            course: 'Analyse 1',
            submissionDate: '2024-05-20',
            score: 75,
            teacherComment: 'Bon travail',
        },
        {
            course: 'Français',
            submissionDate: '2024-05-15',
            score: 82,
            teacherComment: "Excellent essai"
        },
        {
            course: 'Algèbre 2',
            submissionDate: '2024-05-10',
            score: 68,
            teacherComment: 'Il manque quelques détails',
        },
        {
            course: 'Structures de données',
            submissionDate: '2024-05-10',
            score: 18,
            teacherComment: 'Ratrappage',
        },
        {
            course: 'Algorithme 2',
            submissionDate: '2024-05-10',
            score: 90,
            teacherComment: 'Bon travail',
        },
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Cours évalué</th>
                    <th>Date de dépôt</th>
                    <th>Résultat</th>
                    <th>Remarque du professeur</th>
                </tr>
            </thead>
            <tbody>
                {historyData.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.course}</td>
                        <td>{entry.submissionDate}</td>
                        <td className='w-50'>
                            <ProgressBar variant={entry.score >= 70 ? 'success' : entry.score<50 ? 'danger' : 'warning'} now={entry.score} />
                        </td>
                        <td>{entry.teacherComment}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default EvaluationHistoryTable