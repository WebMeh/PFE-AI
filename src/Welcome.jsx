import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Retrieve JWT token from local storage
                const jwtToken = localStorage.getItem('jwtToken');

                if (!jwtToken || jwtToken == "") {
                    // Redirect to login page if no token is found
                    navigate('/login');
                    return;
                }

                // Validate JWT token on the server side for security
                // (**Important:** Do not validate tokens on the client-side)
                const response = await axios.get('http://localhost:9090/users/byUsername', {
                    headers: { Authorization: `Bearer ${jwtToken}` },
                });
                console.log(response)
                setUserDetails(response.data);
            } catch (error) {
                console.error('Registration error:', error.response.data);

            }
        };

        fetchUserDetails();
    }, []); // Empty dependency array to run only once on component mount

    if (!userDetails) {
        return <p>Loading user details...</p>;
    }

    return (
        <div>
            <Container >
                <h2 className="text-center text-success my-4">Welcome {userDetails.firstname}  {userDetails.lastname}</h2>
                <div className="d-flex justify-content-center">
                    <Alert className="w-50 text-center">{userDetails.username}</Alert>
                </div>
            </Container>
            {/* ... display other user details */}
        </div>
    )
}

export default Welcome 