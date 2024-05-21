import React, { useState } from 'react';
import { Table, Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Test = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const userData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com' },
        { id: 5, name: 'Tom Davis', email: 'tom@example.com' },
        { id: 6, name: 'Samantha Brown', email: 'samantha@example.com' },
        { id: 7, name: 'Michael Wilson', email: 'michael@example.com' },
        { id: 8, name: 'Emily Taylor', email: 'emily@example.com' },
        { id: 9, name: 'David Anderson', email: 'david@example.com' },
        { id: 10, name: 'Sarah Thompson', email: 'sarah@example.com' },
        { id: 11, name: 'Mark Lee', email: 'mark@example.com' },
        { id: 12, name: 'Jessica Garcia', email: 'jessica@example.com' },
        { id: 13, name: 'Christopher Hernandez', email: 'christopher@example.com' },
        { id: 14, name: 'Olivia Gonzalez', email: 'olivia@example.com' },
        { id: 15, name: 'Daniel Ramirez', email: 'daniel@example.com' },
    ];

    const usersPerPage = 10;
    const totalPages = Math.ceil(userData.length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = userData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div>

            <h1>Test</h1>
            <InputGroup className="mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <FaSearch />
                    </span>
                </div>
                <FormControl
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </InputGroup>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>  ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default Test;