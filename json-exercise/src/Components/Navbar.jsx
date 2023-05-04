import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
