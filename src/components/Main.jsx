import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
}
