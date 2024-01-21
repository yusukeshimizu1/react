import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/creatediary">
        <FontAwesomeIcon icon={faFilePen} />
        日記記入
      </Link>
    </nav>
  )
}

export default Navbar