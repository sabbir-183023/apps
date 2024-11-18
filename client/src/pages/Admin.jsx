import React, { useContext, useState } from "react";
import { AuthContext } from '../../context/authContext';
import '../css/adminlogin.scss'
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {login, currentUser} = useContext(AuthContext)

    

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)
          navigate("/admin")
        } catch (err) {
            setError(err.response.data)
        }
      };
  
    return (
      <>
      {
        currentUser? <div className="greetings">
          <h2>Hello Sir! You are already logged in.</h2>
          <div className="combined">
            <p>You can go back to the <Link to={'/admin'}>Admin</Link> page.</p>
          </div>
        </div> : <div className="login-container">
        <form className="login-form">
          <h2>Admin Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          {<p className='error-message'>{error}</p>}
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </div>
      } 
      </>
      
    );
  };

export default Admin