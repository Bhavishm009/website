import React, { useState } from 'react'
import { Link ,NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
function Navbar() {
  const [file, setFile] = useState(null);
    const [showInput, setShowInput] = useState(false);

    const handleFileSelect = (event) => {
        setFile(event.target.files[0]);
        setShowInput(false);
 }
  return (
<section>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/register">Register</NavLink>
              </li>
            </ul>
            <span className="d-flex" />
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active"  to="/login">Login</NavLink>
                </li>
                {file ? (
                            <img style={{ borderRadius: '10px', cursor: 'pointer' }} src={URL.createObjectURL(file)} height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        ) : (
                            <img style={{ borderRadius: '10px', cursor: 'pointer' }} src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        )}
                        {showInput && (
                            <input style={{ display: 'flex', justifyContent: 'center', margin: '4px 0px 0px 7px', padding: '0px', height: '40px', width: '400px' }} type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleFileSelect} />
      )}

       
      </ul>
    </div>
  </div>
</nav>



</section>
  )
}

export default Navbar
