import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
    console.log('users fetched!');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul className="users">
      {users.map((user) => (
        <li key={user.id}>
          <h3>
            <Link to={`/users/${user.id}`}>Name: {user.name}</Link>
          </h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
}
