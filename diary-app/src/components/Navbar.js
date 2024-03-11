import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen } from '@fortawesome/free-solid-svg-icons';
import Const from "../Const.js"
import Select from "react-select";
import "./Navbar.css";

const Navbar = (props) => {

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
      <div className="displayOrder">
        <label>表示順</label>
        <div className="selectBox">
          <Select options={Const.ORDER_OPTIONS} defaultValue={Const.ORDER_OPTIONS[0]} onChange={props.handleOrderChange}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar