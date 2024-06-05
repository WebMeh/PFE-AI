import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [questions, setQuestions]= useState([])
    const params = useParams();
    const userId = params.userId;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {

                const response = await axios.get('http://localhost:9090/users/byId/' + userId)
                setUserDetails(response.data.data);
            } catch (error) {
                console.error('gettin user error:', error);

            }
        };
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:9090/community`);
                setQuestions(response.data);
                console.log("All questions ")
                console.log(questions)
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchUserDetails();
        fetchQuestions();
    }, []); // Empty dependency array to run only once on component mount


    if (!userDetails) {
        return <p>Loading user details...</p>;
    }

    return (
        <div>
            <Container >
                <h2 className="text-center text-success my-4">Welcome {userDetails.firstname}  {userDetails.lastname}</h2>
                <div className="d-flex justify-content-center">
                    <Alert className="w-50 text-center">{userDetails.username && userDetails.username}</Alert>
                    {userDetails.apg === null && <p>Teacher</p>}
                    {userDetails.sum === null && <p>Student</p>}
                </div>
            </Container>
            {/* ... display other user details */}
        </div>
    )
}

export default Welcome 