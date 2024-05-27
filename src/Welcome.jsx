import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
            <h2>User Details</h2>
            {/* Display user details here (e.g., name, email, etc.) */}
            <p>Email: {userDetails.firstname}</p>
            {/* ... display other user details */}
        </div>
    )
}

export default Welcome 