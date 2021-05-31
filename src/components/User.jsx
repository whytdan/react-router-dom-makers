import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const fetchUser = async () => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    setUser(data);

    console.log('User fetched: ', data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return user ? (
    <div className="user">
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  ) : (
    <h1>LOADING...</h1>
  );
}
