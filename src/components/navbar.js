import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdMic, MdSettings } from 'react-icons/md';

function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <NavLink to="/"> NavLink</NavLink>
      <p>Title</p>
      <div className="fs-4">
        <MdMic className="me-3" />
        <MdSettings />
      </div>
    </div>
  );
}

export default Navbar;
